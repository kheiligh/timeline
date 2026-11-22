import type { Continent, TimelineEvent } from '#lib/types';

export const MIN_QUERY_LENGTH = 3;

export const NO_RESULTS_MESSAGE =
	'No matching historical event found, but more are being added all the time - check back soon!';

export interface SearchContinent {
	id: string;
	name: string;
	color: string;
}

interface IndexEntry {
	event: TimelineEvent;
	continent: SearchContinent;
	title: string;
	tags: string[];
	description: string;
}

export type SearchIndex = IndexEntry[];

export type SearchSnippet = { kind: 'tag'; text: string } | { kind: 'description'; text: string };

export interface SearchHit {
	event: TimelineEvent;
	continent: SearchContinent;
	score: number;
	/** Present when part of the query matched outside the title, to explain why it's a hit. */
	snippet: SearchSnippet | null;
}

// --- Normalization -----------------------------------------------------------------------------
// Case- and accent-insensitive, ignoring apostrophes and treating hyphens as spaces, so that
// "schoningen" finds "Schöningen" and "rorkes drift" finds "Rorke's Drift".

const STRIPPED = /['’‘`]/;
const AS_SPACE = /[-–—_/]/;

function normalizeChar(ch: string): string {
	if (STRIPPED.test(ch)) return '';
	if (AS_SPACE.test(ch)) return ' ';
	return ch.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

export function normalize(text: string): string {
	let out = '';
	for (const ch of text) out += normalizeChar(ch);
	return out;
}

/** Normalizes text, also returning map[i] = index in the original of normalized char i. */
function normalizeWithMap(text: string): { norm: string; map: number[] } {
	let norm = '';
	const map: number[] = [];
	let i = 0;
	for (const ch of text) {
		const n = normalizeChar(ch);
		for (let k = 0; k < n.length; k++) map.push(i);
		norm += n;
		i += ch.length;
	}
	map.push(text.length);
	return { norm, map };
}

export function tokenize(query: string): string[] {
	return normalize(query).split(/\s+/).filter(Boolean);
}

// --- Index & search ----------------------------------------------------------------------------

export function buildSearchIndex(continents: Continent[]): SearchIndex {
	return continents.flatMap((c) =>
		c.events.map((event: TimelineEvent) => ({
			event,
			continent: { id: c.id, name: c.name, color: c.color },
			title: normalize(event.title),
			tags: (event.tags ?? []).map(normalize),
			description: normalize(event.description)
		}))
	);
}

const isWordChar = (ch: string | undefined) => !!ch && /[\p{L}\p{N}]/u.test(ch);

function hasWordStartMatch(haystack: string, token: string): boolean {
	let idx = haystack.indexOf(token);
	while (idx !== -1) {
		if (!isWordChar(haystack[idx - 1])) return true;
		idx = haystack.indexOf(token, idx + 1);
	}
	return false;
}

type TokenMatch =
	| { field: 'title'; score: number }
	| { field: 'tag'; score: number; tagIndex: number }
	| { field: 'description'; score: number; index: number };

// Ranking: title prefix > title word-start > title contains > tag > description.
function hasWholeWordMatch(haystack: string, token: string): boolean {
	let idx = haystack.indexOf(token);
	while (idx !== -1) {
		if (!isWordChar(haystack[idx - 1]) && !isWordChar(haystack[idx + token.length])) return true;
		idx = haystack.indexOf(token, idx + 1);
	}
	return false;
}

function matchToken(entry: IndexEntry, token: string): TokenMatch | null {
	// Small bonus so "war" ranks "War of the Pacific" above "Wari Empire".
	const wholeWord = hasWholeWordMatch(entry.title, token) ? 10 : 0;
	if (entry.title.startsWith(token)) return { field: 'title', score: 100 + wholeWord };
	if (hasWordStartMatch(entry.title, token)) return { field: 'title', score: 80 + wholeWord };
	if (entry.title.includes(token)) return { field: 'title', score: 60 };

	let tagIndex = entry.tags.findIndex((t) => t.startsWith(token));
	if (tagIndex !== -1) return { field: 'tag', score: 40, tagIndex };
	tagIndex = entry.tags.findIndex((t) => t.includes(token));
	if (tagIndex !== -1) return { field: 'tag', score: 35, tagIndex };

	const index = entry.description.indexOf(token);
	if (index !== -1) {
		return { field: 'description', score: hasWordStartMatch(entry.description, token) ? 20 : 15, index };
	}
	return null;
}

/** Every query word must match somewhere. Results are sorted by relevance, then by year. */
export function search(index: SearchIndex, query: string): SearchHit[] {
	const tokens = tokenize(query);
	if (tokens.join(' ').length < MIN_QUERY_LENGTH) return [];
	const phrase = tokens.join(' ');

	const hits: SearchHit[] = [];
	for (const entry of index) {
		let score = 0;
		let firstNonTitle: TokenMatch | null = null;
		let matchedAll = true;
		for (const token of tokens) {
			const m = matchToken(entry, token);
			if (!m) {
				matchedAll = false;
				break;
			}
			score += m.score;
			if (m.field !== 'title' && !firstNonTitle) firstNonTitle = m;
		}
		if (!matchedAll) continue;

		if (entry.title === phrase) score += 100;
		else if (tokens.length > 1 && entry.title.includes(phrase)) score += 50;

		hits.push({
			event: entry.event,
			continent: entry.continent,
			score,
			snippet: firstNonTitle ? makeSnippet(entry, firstNonTitle) : null
		});
	}

	return hits.sort(
		(a, b) =>
			b.score - a.score || a.event.year - b.event.year || a.event.title.localeCompare(b.event.title)
	);
}

const SNIPPET_RADIUS = 50;

function makeSnippet(entry: IndexEntry, match: TokenMatch): SearchSnippet | null {
	if (match.field === 'tag') {
		return { kind: 'tag', text: entry.event.tags![match.tagIndex] };
	}
	if (match.field !== 'description') return null;

	const original = entry.event.description;
	const { map } = normalizeWithMap(original);
	const at = map[match.index];
	let start = Math.max(0, at - SNIPPET_RADIUS);
	let end = Math.min(original.length, at + SNIPPET_RADIUS);
	// Snap to word boundaries so the snippet doesn't start or end mid-word.
	if (start > 0) {
		const space = original.indexOf(' ', start);
		if (space !== -1 && space < at) start = space + 1;
	}
	if (end < original.length) {
		const space = original.lastIndexOf(' ', end);
		if (space > at) end = space;
	}
	const text = original.slice(start, end).trim();
	return {
		kind: 'description',
		text: `${start > 0 ? '…' : ''}${text}${end < original.length ? '…' : ''}`
	};
}

// --- Highlighting ------------------------------------------------------------------------------

export interface Segment {
	text: string;
	match: boolean;
}

/** Splits text into matched / unmatched segments for every occurrence of any token. */
export function highlightSegments(text: string, tokens: string[]): Segment[] {
	if (tokens.length === 0) return [{ text, match: false }];
	const { norm, map } = normalizeWithMap(text);

	const ranges: [number, number][] = [];
	for (const token of tokens) {
		let idx = norm.indexOf(token);
		while (idx !== -1) {
			ranges.push([idx, idx + token.length]);
			idx = norm.indexOf(token, idx + 1);
		}
	}
	if (ranges.length === 0) return [{ text, match: false }];

	ranges.sort((a, b) => a[0] - b[0]);
	const merged: [number, number][] = [ranges[0]];
	for (const [s, e] of ranges.slice(1)) {
		const last = merged[merged.length - 1];
		if (s <= last[1]) last[1] = Math.max(last[1], e);
		else merged.push([s, e]);
	}

	const segments: Segment[] = [];
	let cursor = 0;
	for (const [s, e] of merged) {
		const os = map[s];
		const oe = map[e];
		if (os > cursor) segments.push({ text: text.slice(cursor, os), match: false });
		segments.push({ text: text.slice(os, oe), match: true });
		cursor = oe;
	}
	if (cursor < text.length) segments.push({ text: text.slice(cursor), match: false });
	return segments;
}
