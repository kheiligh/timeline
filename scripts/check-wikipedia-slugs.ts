// Checks that every wikipediaSlug resolves to an existing Wikipedia article without a redirect.
// Usage:
//   npm run check:slugs                 # all slugs
//   npm run check:slugs -- --since main # only slugs added or changed since a git ref
// Exits non-zero if any slug is missing or redirects.
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';

const EVENTS_DIR = new URL('../src/lib/data/events/', import.meta.url);
const SLUG_RE = /wikipediaSlug:\s*(['"])(.+?)\1/g;
const USER_AGENT = 'TimelineSlugCheck/1.0 (https://github.com/kheiligh/timeline)';
const BATCH = 50;

function allSlugs(): string[] {
	const slugs = new Set<string>();
	for (const file of readdirSync(EVENTS_DIR).filter((f) => f.endsWith('.ts'))) {
		for (const m of readFileSync(new URL(file, EVENTS_DIR), 'utf8').matchAll(SLUG_RE)) slugs.add(m[2]);
	}
	return [...slugs];
}

function slugsChangedSince(ref: string): string[] {
	const diff = execFileSync('git', ['diff', '--unified=0', ref, '--', 'src/lib/data/events'], {
		encoding: 'utf8'
	});
	const slugs = new Set<string>();
	for (const line of diff.split('\n')) {
		if (!line.startsWith('+') || line.startsWith('+++')) continue;
		for (const m of line.matchAll(SLUG_RE)) slugs.add(m[2]);
	}
	return [...slugs];
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type QueryResult = {
	redirects?: { from: string; to: string; tofragment?: string }[];
	normalized?: { from: string; to: string }[];
	pages: { title: string; missing?: boolean; invalid?: boolean }[];
};

async function query(titles: string[]): Promise<QueryResult> {
	const body = new URLSearchParams({
		action: 'query',
		titles: titles.join('|'),
		redirects: '1',
		format: 'json',
		formatversion: '2',
		maxlag: '5'
	});
	for (let attempt = 0; attempt < 6; attempt++) {
		const res = await fetch('https://en.wikipedia.org/w/api.php', {
			method: 'POST',
			body,
			headers: { 'User-Agent': USER_AGENT }
		});
		if (res.ok) {
			const json = await res.json();
			if (json.query) return json.query;
		}
		const wait = Number(res.headers.get('retry-after')) || 5 * (attempt + 1);
		console.error(`  HTTP ${res.status}, retrying in ${wait}s`);
		await sleep(wait * 1000);
	}
	throw new Error('Wikipedia API kept failing; giving up');
}

const sinceIdx = process.argv.indexOf('--since');
const slugs = sinceIdx > -1 ? slugsChangedSince(process.argv[sinceIdx + 1]) : allSlugs();
console.log(`Checking ${slugs.length} slug(s)${sinceIdx > -1 ? ` changed since ${process.argv[sinceIdx + 1]}` : ''}`);

const missing: string[] = [];
const redirects: string[] = [];
for (let i = 0; i < slugs.length; i += BATCH) {
	const batch = slugs.slice(i, i + BATCH).map((s) => s.replace(/_/g, ' '));
	const result = await query(batch);
	// Title-case normalization (e.g. first letter) is harmless; only true redirects matter.
	for (const r of result.redirects ?? []) {
		const target = r.to.replace(/ /g, '_') + (r.tofragment ? `#${r.tofragment.replace(/ /g, '_')}` : '');
		redirects.push(`${r.from.replace(/ /g, '_')} -> ${target}`);
	}
	for (const p of result.pages) if (p.missing || p.invalid) missing.push(p.title.replace(/ /g, '_'));
	if (i + BATCH < slugs.length) await sleep(1500);
}

if (missing.length) console.error(`\nMissing (${missing.length}):\n  ${missing.join('\n  ')}`);
if (redirects.length) console.error(`\nRedirects — use the canonical title (${redirects.length}):\n  ${redirects.join('\n  ')}`);
if (missing.length || redirects.length) process.exit(1);
console.log('OK');
