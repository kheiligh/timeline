// Structural checks for the timeline dataset. Exits non-zero if any problem is found.
// Usage: npm run validate:data
import { readFileSync } from 'node:fs';
import type { TimelineEvent } from '../src/lib/types.ts';
import { africaEvents } from '../src/lib/data/events/africa.ts';
import { asiaEvents } from '../src/lib/data/events/asia.ts';
import { europeEvents } from '../src/lib/data/events/europe.ts';
import { northAmericaEvents } from '../src/lib/data/events/north-america.ts';
import { southAmericaEvents } from '../src/lib/data/events/south-america.ts';
import { oceaniaEvents } from '../src/lib/data/events/oceania.ts';

const files: Record<string, { prefix: string; events: TimelineEvent[] }> = {
	africa: { prefix: 'africa-', events: africaEvents },
	asia: { prefix: 'asia-', events: asiaEvents },
	europe: { prefix: 'europe-', events: europeEvents },
	'north-america': { prefix: 'na-', events: northAmericaEvents },
	'south-america': { prefix: 'sa-', events: southAmericaEvents },
	oceania: { prefix: 'oceania-', events: oceaniaEvents }
};

const problems: string[] = [];
const byId = new Map<string, { event: TimelineEvent; file: string }>();

for (const [file, { prefix, events }] of Object.entries(files)) {
	console.log(`${file.padEnd(14)} ${events.length}`);
	for (const event of events) {
		const where = `${file}: ${event.id}`;
		if (byId.has(event.id)) problems.push(`${where} duplicate id`);
		byId.set(event.id, { event, file });

		if (!event.id.startsWith(prefix)) problems.push(`${where} id should start with "${prefix}"`);
		for (const field of ['title', 'description', 'significance', 'wikipediaSlug'] as const) {
			if (!event[field]?.trim()) problems.push(`${where} missing ${field}`);
		}
		if (!event.tags?.length) problems.push(`${where} missing tags`);
		if (!Number.isInteger(event.year)) problems.push(`${where} year must be an integer`);
		if (event.year === 0) problems.push(`${where} year 0 does not exist (use 1 or -1)`);
		if (event.year > new Date().getFullYear()) problems.push(`${where} year is in the future`);
		if (event.endYear !== undefined && event.endYear <= event.year) {
			problems.push(`${where} endYear must be after year`);
		}
		if (event.wikipediaSlug?.includes(' ')) problems.push(`${where} wikipediaSlug contains spaces`);

		const sentences = event.description.split(/(?<=[.!?]["”']?)\s+(?=[A-Z"“])/).length;
		if (sentences > 3) problems.push(`${where} description has ${sentences} sentences (max 3)`);
	}
}

for (const { event, file } of byId.values()) {
	for (const relatedId of event.related ?? []) {
		if (relatedId === event.id) problems.push(`${file}: ${event.id} relates to itself`);
		else if (!byId.has(relatedId)) problems.push(`${file}: ${event.id} related id not found: ${relatedId}`);
	}
}

// The verification log may only reference events that exist.
const logPath = new URL('../data/verification-log.json', import.meta.url);
const log = JSON.parse(readFileSync(logPath, 'utf8')) as Record<string, { status?: string }>;
const statuses = new Set(['ok', 'fixed', 'disputed', 'unverifiable', 'unverified']);
for (const [id, entry] of Object.entries(log)) {
	if (!byId.has(id)) problems.push(`verification-log: unknown event id ${id}`);
	if (!entry.status || !statuses.has(entry.status)) {
		problems.push(`verification-log: ${id} has invalid status "${entry.status}"`);
	}
}

console.log(`total          ${byId.size}`);
console.log(`log entries    ${Object.keys(log).length}`);
if (problems.length) {
	console.error(`\n${problems.length} problem(s):`);
	for (const p of problems) console.error(`  - ${p}`);
	process.exit(1);
}
console.log('OK');
