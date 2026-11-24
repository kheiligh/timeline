/**
 * How the panel (event details or search results) maps onto browser history.
 *
 * The open event lives in the URL (/event/<id>); everything else rides along as history state.
 * These functions only decide what to do; the page carries the plan out with SvelteKit's
 * navigation helpers. Keeping them pure lets the rules be unit-tested.
 *
 * Rules:
 * - Opening an event from the closed timeline, following a connection, or picking a search result
 *   pushes an entry, so Back retraces the trail.
 * - Tapping another dot or stepping ‹ › while an event is open replaces the entry, so Back doesn't
 *   replay every dot poked.
 * - Close returns to the entry from just before the panel opened (Forward then re-opens the trail).
 *   If there is no such entry, e.g. the visitor arrived on a shared link, it replaces with "/".
 * - On phones, expanding the sheet to full height pushes an entry; Back steps it down to half.
 */

export interface PanelHistoryState {
	/**
	 * How many entries back the nearest closed-panel entry is. `null` (or absent on an entry with a
	 * panel open) means there isn't one we know of, e.g. the visitor landed on a shared link.
	 */
	closedBack?: number | null;
	/** The search results view is part of the panel stack. */
	results?: boolean;
	/** Phone only: the bottom sheet is at full height in this entry. */
	sheetFull?: boolean;
	/** Phone only: this entry was pushed by expanding the sheet, so collapsing can pop it. */
	expanded?: boolean;
}

export interface HistoryLocation {
	eventId: string | null;
	state: PanelHistoryState;
}

export type NavPlan =
	| { kind: 'navigate'; eventId: string | null; replace: boolean; state: PanelHistoryState }
	| { kind: 'back'; steps: number }
	| { kind: 'none' };

export type SelectSource = 'timeline' | 'step' | 'connection' | 'search' | 'results';

const NONE: NavPlan = { kind: 'none' };

export function panelOpen(loc: HistoryLocation): boolean {
	return loc.eventId !== null || !!loc.state.results;
}

/** Steps back to the nearest closed-panel entry: 0 if this is one, null if unknown. */
export function stepsToClosed(loc: HistoryLocation): number | null {
	if (!panelOpen(loc)) return 0;
	return loc.state.closedBack ?? null;
}

function oneMore(steps: number | null): number | null {
	return steps === null ? null : steps + 1;
}

export function planSelect(current: HistoryLocation, eventId: string, source: SelectSource): NavPlan {
	if (current.eventId === eventId) return NONE;

	// Timeline taps and ‹ › steps show the peek card; the others keep the sheet's height.
	const keepsSheetHeight = source === 'connection' || source === 'results';
	const sheetFull = keepsSheetHeight && !!current.state.sheetFull;

	const replace = current.eventId !== null && (source === 'timeline' || source === 'step');
	const closedBack = replace ? stepsToClosed(current) : oneMore(stepsToClosed(current));

	return {
		kind: 'navigate',
		eventId,
		replace,
		state: clean({ closedBack, results: current.state.results, sheetFull })
	};
}

export function planClose(current: HistoryLocation): NavPlan {
	const steps = stepsToClosed(current);
	if (steps === 0) return NONE;
	if (steps !== null) return { kind: 'back', steps };
	return { kind: 'navigate', eventId: null, replace: true, state: {} };
}

/** "Show all results" from the search bar. */
export function planShowResults(current: HistoryLocation): NavPlan {
	if (current.eventId === null && current.state.results) return NONE;
	return {
		kind: 'navigate',
		eventId: null,
		replace: false,
		state: clean({ results: true, closedBack: oneMore(stepsToClosed(current)) })
	};
}

/** "← Back to results" while viewing an event picked from the results list. */
export function planBackToResults(current: HistoryLocation): NavPlan {
	if (!current.state.results || current.eventId === null) return NONE;
	return {
		kind: 'navigate',
		eventId: null,
		replace: false,
		state: clean({ results: true, closedBack: oneMore(stepsToClosed(current)) })
	};
}

/** Typing a new query while viewing an event from the results returns to the live list. */
export function planEditQuery(current: HistoryLocation): NavPlan {
	if (!current.state.results || current.eventId === null) return NONE;
	return {
		kind: 'navigate',
		eventId: null,
		replace: true,
		state: clean({ results: true, closedBack: stepsToClosed(current) })
	};
}

/** Phone: the sheet was dragged or tapped up to full height. */
export function planExpandSheet(current: HistoryLocation): NavPlan {
	if (!panelOpen(current) || current.state.sheetFull) return NONE;
	return {
		kind: 'navigate',
		eventId: current.eventId,
		replace: false,
		state: clean({ ...current.state, sheetFull: true, expanded: true, closedBack: oneMore(stepsToClosed(current)) })
	};
}

/** Phone: the sheet left full height by the visitor's own hand (not by Back). */
export function planCollapseSheet(current: HistoryLocation): NavPlan {
	if (!current.state.sheetFull) return NONE;
	if (current.state.expanded) return { kind: 'back', steps: 1 };
	return {
		kind: 'navigate',
		eventId: current.eventId,
		replace: true,
		state: clean({ ...current.state, sheetFull: false, expanded: false })
	};
}

/** Drops false/undefined flags so history state stays small and comparisons stay simple. */
function clean(state: PanelHistoryState): PanelHistoryState {
	const out: PanelHistoryState = {};
	if (state.closedBack !== undefined) out.closedBack = state.closedBack;
	if (state.results) out.results = true;
	if (state.sheetFull) out.sheetFull = true;
	if (state.expanded) out.expanded = true;
	return out;
}
