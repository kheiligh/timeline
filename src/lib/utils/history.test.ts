import { describe, expect, it } from 'vitest';
import {
	planBackToResults,
	planClose,
	planCollapseSheet,
	planEditQuery,
	planExpandSheet,
	planSelect,
	planShowResults,
	stepsToClosed,
	type HistoryLocation,
	type NavPlan
} from './history';

const closed: HistoryLocation = { eventId: null, state: {} };
const at = (eventId: string | null, state: HistoryLocation['state'] = {}): HistoryLocation => ({
	eventId,
	state
});

/** Applies a plan to a simulated history stack, the way the page does in the browser. */
function apply(stack: HistoryLocation[], index: number, plan: NavPlan): number {
	if (plan.kind === 'none') return index;
	if (plan.kind === 'back') return index - plan.steps;
	const loc = { eventId: plan.eventId, state: plan.state };
	if (plan.replace) {
		stack[index] = loc;
		return index;
	}
	stack.splice(index + 1, Infinity, loc);
	return index + 1;
}

describe('stepsToClosed', () => {
	it('is 0 when the panel is closed', () => {
		expect(stepsToClosed(closed)).toBe(0);
	});

	it('is unknown for an event entry without state, such as a shared link or a reload', () => {
		expect(stepsToClosed(at('a'))).toBeNull();
	});

	it('reads the recorded distance', () => {
		expect(stepsToClosed(at('a', { closedBack: 3 }))).toBe(3);
	});
});

describe('planSelect', () => {
	it('pushes when opening an event from the closed timeline', () => {
		expect(planSelect(closed, 'a', 'timeline')).toEqual({
			kind: 'navigate',
			eventId: 'a',
			replace: false,
			state: { closedBack: 1 }
		});
	});

	it('replaces when tapping another dot or stepping while an event is open', () => {
		for (const source of ['timeline', 'step'] as const) {
			expect(planSelect(at('a', { closedBack: 1 }), 'b', source)).toEqual({
				kind: 'navigate',
				eventId: 'b',
				replace: true,
				state: { closedBack: 1 }
			});
		}
	});

	it('pushes when following a connection, search pick or result', () => {
		for (const source of ['connection', 'search', 'results'] as const) {
			const plan = planSelect(at('a', { closedBack: 2 }), 'b', source);
			expect(plan).toMatchObject({ kind: 'navigate', replace: false, state: { closedBack: 3 } });
		}
	});

	it('keeps an unknown distance unknown', () => {
		expect(planSelect(at('a'), 'b', 'connection')).toMatchObject({ state: { closedBack: null } });
	});

	it('does nothing when the event is already open', () => {
		expect(planSelect(at('a', { closedBack: 1 }), 'a', 'timeline')).toEqual({ kind: 'none' });
	});

	it('carries the results context along a trail', () => {
		const plan = planSelect(at(null, { results: true, closedBack: 1 }), 'a', 'results');
		expect(plan).toMatchObject({ state: { results: true, closedBack: 2 } });
	});

	it('keeps a full-height sheet for connections and results, drops it for taps and search', () => {
		const full = at('a', { closedBack: 2, sheetFull: true, expanded: true });
		expect(planSelect(full, 'b', 'connection')).toMatchObject({ state: { sheetFull: true } });
		expect(planSelect(full, 'b', 'results')).toMatchObject({ state: { sheetFull: true } });
		for (const source of ['timeline', 'step', 'search'] as const) {
			const plan = planSelect(full, 'b', source);
			expect(plan.kind === 'navigate' && plan.state.sheetFull).toBeFalsy();
		}
	});

	it('never marks a selection as an expansion', () => {
		const full = at('a', { closedBack: 2, sheetFull: true, expanded: true });
		const plan = planSelect(full, 'b', 'connection');
		expect(plan.kind === 'navigate' && plan.state.expanded).toBeFalsy();
	});
});

describe('planClose', () => {
	it('goes back to the entry before the panel opened', () => {
		expect(planClose(at('b', { closedBack: 3 }))).toEqual({ kind: 'back', steps: 3 });
	});

	it('replaces with the bare timeline when there is no earlier closed entry', () => {
		expect(planClose(at('a'))).toEqual({ kind: 'navigate', eventId: null, replace: true, state: {} });
	});

	it('does nothing when already closed', () => {
		expect(planClose(closed)).toEqual({ kind: 'none' });
	});
});

describe('results view', () => {
	it('opens results with a push', () => {
		expect(planShowResults(closed)).toEqual({
			kind: 'navigate',
			eventId: null,
			replace: false,
			state: { results: true, closedBack: 1 }
		});
	});

	it('does nothing when results are already showing', () => {
		expect(planShowResults(at(null, { results: true, closedBack: 1 }))).toEqual({ kind: 'none' });
	});

	it('"Back to results" pushes the list again', () => {
		const plan = planBackToResults(at('a', { results: true, closedBack: 2 }));
		expect(plan).toEqual({
			kind: 'navigate',
			eventId: null,
			replace: false,
			state: { results: true, closedBack: 3 }
		});
	});

	it('"Back to results" does nothing outside the results context', () => {
		expect(planBackToResults(at('a', { closedBack: 1 }))).toEqual({ kind: 'none' });
	});

	it('editing the query from an event replaces it with the list', () => {
		expect(planEditQuery(at('a', { results: true, closedBack: 2 }))).toEqual({
			kind: 'navigate',
			eventId: null,
			replace: true,
			state: { results: true, closedBack: 2 }
		});
		expect(planEditQuery(at(null, { results: true, closedBack: 1 }))).toEqual({ kind: 'none' });
	});
});

describe('phone sheet', () => {
	it('expanding pushes a full-height entry for the same view', () => {
		expect(planExpandSheet(at('a', { closedBack: 1 }))).toEqual({
			kind: 'navigate',
			eventId: 'a',
			replace: false,
			state: { closedBack: 2, sheetFull: true, expanded: true }
		});
	});

	it('expanding does nothing when closed or already full', () => {
		expect(planExpandSheet(closed)).toEqual({ kind: 'none' });
		expect(planExpandSheet(at('a', { sheetFull: true }))).toEqual({ kind: 'none' });
	});

	it('collapsing pops the entry that expanding pushed', () => {
		expect(planCollapseSheet(at('a', { closedBack: 2, sheetFull: true, expanded: true }))).toEqual({
			kind: 'back',
			steps: 1
		});
	});

	it('collapsing a sheet that arrived full (via a connection) rewrites the entry instead', () => {
		expect(planCollapseSheet(at('b', { closedBack: 3, sheetFull: true }))).toEqual({
			kind: 'navigate',
			eventId: 'b',
			replace: true,
			state: { closedBack: 3 }
		});
	});
});

describe('trails through a simulated history', () => {
	it('open → connection → connection → close lands on the closed timeline', () => {
		const stack = [closed];
		let i = 0;
		i = apply(stack, i, planSelect(stack[i], 'a', 'timeline'));
		i = apply(stack, i, planSelect(stack[i], 'b', 'connection'));
		i = apply(stack, i, planSelect(stack[i], 'c', 'connection'));
		expect(stack.map((l) => l.eventId)).toEqual([null, 'a', 'b', 'c']);
		i = apply(stack, i, planClose(stack[i]));
		expect(i).toBe(0);
		expect(stack[i].eventId).toBeNull();
	});

	it('timeline taps between connections do not add entries, and close still works', () => {
		const stack = [closed];
		let i = 0;
		i = apply(stack, i, planSelect(stack[i], 'a', 'timeline'));
		i = apply(stack, i, planSelect(stack[i], 'b', 'timeline'));
		i = apply(stack, i, planSelect(stack[i], 'c', 'step'));
		i = apply(stack, i, planSelect(stack[i], 'd', 'connection'));
		expect(stack.map((l) => l.eventId)).toEqual([null, 'c', 'd']);
		i = apply(stack, i, planClose(stack[i]));
		expect(stack[i]).toEqual(closed);
	});

	it('a trail that starts on a shared link closes by replacing with the bare timeline', () => {
		const stack = [at('a')];
		let i = 0;
		i = apply(stack, i, planSelect(stack[i], 'b', 'connection'));
		i = apply(stack, i, planClose(stack[i]));
		expect(stack[i]).toEqual(closed);
		expect(stack.map((l) => l.eventId)).toEqual(['a', null]);
	});

	it('expand, follow a connection, then close on a phone', () => {
		const stack = [closed];
		let i = 0;
		i = apply(stack, i, planSelect(stack[i], 'a', 'timeline'));
		i = apply(stack, i, planExpandSheet(stack[i]));
		i = apply(stack, i, planSelect(stack[i], 'b', 'connection'));
		expect(stack[i].state).toMatchObject({ sheetFull: true });
		i = apply(stack, i, planClose(stack[i]));
		expect(stack[i]).toEqual(closed);
	});

	it('search results → event → back to results → close', () => {
		const stack = [closed];
		let i = 0;
		i = apply(stack, i, planShowResults(stack[i]));
		i = apply(stack, i, planSelect(stack[i], 'a', 'results'));
		i = apply(stack, i, planBackToResults(stack[i]));
		expect(stack[i]).toMatchObject({ eventId: null, state: { results: true } });
		i = apply(stack, i, planClose(stack[i]));
		expect(stack[i]).toEqual(closed);
	});
});
