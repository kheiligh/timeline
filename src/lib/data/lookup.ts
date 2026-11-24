import type { Continent, TimelineEvent } from '#lib/types';
import { continents as allContinents } from './continents';
import { renamedEventIds } from './redirects';

export interface EventRef {
	event: TimelineEvent;
	continent: Continent;
}

export interface Connection {
	event: TimelineEvent;
	continentName: string;
	continentColor: string;
}

export interface LaneNeighbours {
	continent: Continent;
	prev: TimelineEvent | null;
	next: TimelineEvent | null;
}

/** The URL path that opens an event. Event ids are part of shared links: never rename one without a redirect. */
export function eventPath(id: string): string {
	return `/event/${encodeURIComponent(id)}`;
}

export interface EventLookup {
	byId: Map<string, EventRef>;
	/** Each event's continent and its neighbours in the same lane, for ‹ › stepping. */
	lanes: Map<string, LaneNeighbours>;
	/** Cross-references are treated as bidirectional: if A lists B, B also links back to A. */
	connections: Map<string, Connection[]>;
}

export function buildLookup(continents: Continent[]): EventLookup {
	const byId = new Map<string, EventRef>();
	const lanes = new Map<string, LaneNeighbours>();
	for (const continent of continents) {
		continent.events.forEach((event, i, events) => {
			byId.set(event.id, { event, continent });
			lanes.set(event.id, { continent, prev: events[i - 1] ?? null, next: events[i + 1] ?? null });
		});
	}

	const linked = new Map<string, Set<string>>();
	const link = (a: string, b: string) => {
		if (!linked.has(a)) linked.set(a, new Set());
		linked.get(a)!.add(b);
	};
	for (const { event } of byId.values()) {
		for (const relatedId of event.related ?? []) {
			if (!byId.has(relatedId) || relatedId === event.id) continue;
			link(event.id, relatedId);
			link(relatedId, event.id);
		}
	}

	const connections = new Map<string, Connection[]>();
	for (const [id, ids] of linked) {
		connections.set(
			id,
			[...ids]
				.map((rid) => {
					const { event, continent } = byId.get(rid)!;
					return { event, continentName: continent.name, continentColor: continent.color };
				})
				.sort((a, b) => a.event.year - b.event.year)
		);
	}

	return { byId, lanes, connections };
}

export const lookup = buildLookup(allContinents);

export type ResolvedEventId =
	| { kind: 'found'; ref: EventRef }
	| { kind: 'renamed'; id: string }
	| { kind: 'missing' };

/** Resolves an id from a URL: a live event, an old id that now redirects, or nothing. */
export function resolveEventId(
	id: string,
	byId: Map<string, EventRef> = lookup.byId,
	renamed: Record<string, string> = renamedEventIds
): ResolvedEventId {
	const ref = byId.get(id);
	if (ref) return { kind: 'found', ref };
	// Follow chains (a → b → c) in case an event is renamed more than once; stop on cycles.
	const seen = new Set<string>([id]);
	let current = id;
	while (Object.hasOwn(renamed, current)) {
		current = renamed[current];
		if (seen.has(current)) break;
		seen.add(current);
		if (byId.has(current)) return { kind: 'renamed', id: current };
	}
	return { kind: 'missing' };
}
