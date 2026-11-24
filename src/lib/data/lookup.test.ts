import { describe, expect, it } from 'vitest';
import type { Continent, TimelineEvent } from '#lib/types';
import { continents } from './continents';
import { buildLookup, eventPath, lookup, resolveEventId } from './lookup';
import { renamedEventIds } from './redirects';

const ev = (id: string, year: number, related?: string[]): TimelineEvent => ({
	id,
	title: id,
	year,
	description: '',
	significance: '',
	related
});

const continent = (id: string, events: TimelineEvent[]): Continent => ({
	id,
	name: id.toUpperCase(),
	shortName: id,
	color: '#000',
	activityKeyframes: [],
	events
});

const sample = [
	continent('x', [ev('x-1', -500, ['y-2']), ev('x-2', 100), ev('x-3', 900, ['missing', 'x-3'])]),
	continent('y', [ev('y-1', 50), ev('y-2', 1200, ['x-1', 'y-1'])])
];

describe('buildLookup', () => {
	const { byId, lanes, connections } = buildLookup(sample);

	it('finds every event with its continent', () => {
		expect(byId.size).toBe(5);
		expect(byId.get('y-1')?.continent.id).toBe('y');
	});

	it('links neighbours within a lane only', () => {
		expect(lanes.get('x-1')).toMatchObject({ prev: null, next: { id: 'x-2' } });
		expect(lanes.get('x-3')).toMatchObject({ prev: { id: 'x-2' }, next: null });
		expect(lanes.get('y-1')?.prev).toBeNull();
	});

	it('makes connections bidirectional, without duplicates, sorted by year', () => {
		expect(connections.get('x-1')?.map((c) => c.event.id)).toEqual(['y-2']);
		expect(connections.get('y-1')?.map((c) => c.event.id)).toEqual(['y-2']);
		expect(connections.get('y-2')?.map((c) => c.event.id)).toEqual(['x-1', 'y-1']);
	});

	it('ignores unknown ids and self-references', () => {
		expect(connections.has('x-3')).toBe(false);
	});

	it('labels connections with their continent', () => {
		expect(connections.get('x-1')?.[0]).toMatchObject({ continentName: 'Y', continentColor: '#000' });
	});
});

describe('resolveEventId', () => {
	const { byId } = buildLookup(sample);

	it('finds live ids', () => {
		const result = resolveEventId('x-2', byId, {});
		expect(result.kind === 'found' && result.ref.event.id).toBe('x-2');
	});

	it('follows renamed ids, including chains', () => {
		expect(resolveEventId('old', byId, { old: 'x-2' })).toEqual({ kind: 'renamed', id: 'x-2' });
		expect(resolveEventId('oldest', byId, { oldest: 'old', old: 'x-2' })).toEqual({
			kind: 'renamed',
			id: 'x-2'
		});
	});

	it('reports unknown ids, broken renames and cycles as missing', () => {
		expect(resolveEventId('nope', byId, {})).toEqual({ kind: 'missing' });
		expect(resolveEventId('old', byId, { old: 'gone' })).toEqual({ kind: 'missing' });
		expect(resolveEventId('a', byId, { a: 'b', b: 'a' })).toEqual({ kind: 'missing' });
	});

	it('ignores inherited object keys', () => {
		expect(resolveEventId('constructor', byId, {})).toEqual({ kind: 'missing' });
		expect(resolveEventId('__proto__', byId, {})).toEqual({ kind: 'missing' });
	});
});

describe('eventPath', () => {
	it('builds /event/<id> and escapes anything unusual', () => {
		expect(eventPath('europe-magna-carta')).toBe('/event/europe-magna-carta');
		expect(eventPath('a b/c')).toBe('/event/a%20b%2Fc');
	});
});

describe('the real dataset', () => {
	it('has unique ids that are safe to put in a URL unescaped', () => {
		const ids = continents.flatMap((c) => c.events.map((e) => e.id));
		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
	});

	it('indexes every event', () => {
		const total = continents.reduce((n, c) => n + c.events.length, 0);
		expect(lookup.byId.size).toBe(total);
	});

	it('only redirects old ids that are no longer in use, to ids that exist', () => {
		for (const [from, to] of Object.entries(renamedEventIds)) {
			expect(lookup.byId.has(from), `${from} is still a live id`).toBe(false);
			expect(resolveEventId(from).kind, `${from} → ${to} does not resolve`).toBe('renamed');
		}
	});
});
