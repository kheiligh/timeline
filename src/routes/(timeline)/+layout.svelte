<script lang="ts">
	import { untrack } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import TimelineViz from '#lib/components/TimelineViz.svelte';
	import DetailPanel from '#lib/components/DetailPanel.svelte';
	import SidePanel from '#lib/components/SidePanel.svelte';
	import BottomSheet, { type SheetSnap } from '#lib/components/BottomSheet.svelte';
	import EventPeek from '#lib/components/EventPeek.svelte';
	import SearchBar from '#lib/components/SearchBar.svelte';
	import SearchResults, { type ResultsSort } from '#lib/components/SearchResults.svelte';
	import { continents } from '#lib/data/continents';
	import { eventPath, lookup } from '#lib/data/lookup';
	import type { TimelineEvent } from '#lib/types';
	import {
		planBackToResults,
		planClose,
		planCollapseSheet,
		planEditQuery,
		planExpandSheet,
		planSelect,
		planShowResults,
		type HistoryLocation,
		type NavPlan,
		type SelectSource
	} from '#lib/utils/history';
	import { coarsePointer, narrowScreen } from '#lib/utils/media.svelte';
	import { buildSearchIndex, search, MIN_QUERY_LENGTH, type SearchHit } from '#lib/utils/search';
	import type { LayoutProps } from './$types';

	// The timeline lives in this layout so it stays mounted (scroll, zoom) while the URL moves
	// between / and /event/<id>. The routes underneath only set the page title and preview tags.
	let { children }: LayoutProps = $props();

	const SEARCH_DEBOUNCE_MS = 150;

	// --- What's open comes from the URL and history state (see #lib/utils/history) ---
	const selectedEvent = $derived<TimelineEvent | null>(
		(page.params.id && lookup.byId.get(page.params.id)?.event) || null
	);
	const resultsOpen = $derived(!!page.state.results);
	const here = $derived<HistoryLocation>({ eventId: selectedEvent?.id ?? null, state: page.state });

	function run(plan: NavPlan) {
		if (plan.kind === 'none') return;
		if (plan.kind === 'back') {
			history.go(-plan.steps);
			return;
		}
		const path = plan.eventId ? eventPath(plan.eventId) : '/';
		goto(path, {
			replace: plan.replace,
			state: plan.state,
			// Same URL, different panel state (results list, sheet height): no page change needed.
			shallow: path === page.url.pathname,
			// Keep the window scroll and focus; the timeline scrolls itself.
			reset: false,
			// A reload keeps knowing where the closed timeline is in history.
			persistState: true
		});
	}

	let timelineViz = $state<ReturnType<typeof TimelineViz> | null>(null);

	// --- Search ---
	const searchIndex = buildSearchIndex(continents);
	let query = $state('');
	let searchTerm = $state(''); // debounced copy of `query`
	let resultsSort = $state<ResultsSort>('relevance');
	let resultsScrollTop = $state(0);

	$effect(() => {
		const q = query;
		const t = setTimeout(() => (searchTerm = q), SEARCH_DEBOUNCE_MS);
		return () => clearTimeout(t);
	});

	const hits = $derived(
		searchTerm.trim().length >= MIN_QUERY_LENGTH ? search(searchIndex, searchTerm) : []
	);

	// New results start at the top of the list.
	$effect(() => {
		searchTerm;
		resultsSort;
		resultsScrollTop = 0;
	});

	const highlightIds = $derived(
		resultsOpen && hits.length > 0 ? new Set<string>(hits.map((h: SearchHit) => h.event.id)) : null
	);

	const panelOpen = $derived(!!selectedEvent || resultsOpen);

	// --- Phone layout: bottom sheet ---
	const narrow = $derived(narrowScreen.current);
	const PEEK_HEIGHT = 116;
	let mainHeight = $state(0);
	// Someone arriving on a shared link wants the details, not just the peek card.
	let sheetSnap = $state<SheetSnap>(page.params.id ? 'half' : 'peek');
	const sheetHeights = $derived<Record<SheetSnap, number>>({
		peek: PEEK_HEIGHT,
		half: Math.max(PEEK_HEIGHT + 80, Math.round(mainHeight * 0.55)),
		full: mainHeight
	});

	const selectedLane = $derived(selectedEvent ? lookup.lanes.get(selectedEvent.id) : undefined);

	/** The visitor moved the sheet: full height gets its own history entry, so Back steps it down. */
	function handleSnapChange(snap: SheetSnap) {
		const was = sheetSnap;
		sheetSnap = snap;
		if (snap === 'full' && was !== 'full') run(planExpandSheet(here));
		else if (was === 'full' && snap !== 'full') run(planCollapseSheet(here));
	}

	// Back/Forward onto an entry decides the sheet height: full if that entry was full,
	// otherwise a full sheet steps down to half.
	$effect(() => {
		const full = !!page.state.sheetFull;
		untrack(() => {
			if (!narrow) return;
			if (full && sheetSnap !== 'full') sheetSnap = 'full';
			else if (!full && sheetSnap === 'full') sheetSnap = 'half';
		});
	});

	// --- One-time gesture hint for touch users ---
	const HINT_KEY = 'timeline-touch-hint-dismissed';
	let hintVisible = $state(false);

	$effect(() => {
		if (!coarsePointer.current) return;
		try {
			hintVisible = localStorage.getItem(HINT_KEY) !== '1';
		} catch {
			hintVisible = true;
		}
	});

	function dismissHint() {
		if (!hintVisible) return;
		hintVisible = false;
		try {
			localStorage.setItem(HINT_KEY, '1');
		} catch {
			// Private mode or blocked storage: the hint just shows again next visit.
		}
	}

	// Bring the open event into view when it arrives by URL: a shared link, Back or Forward.
	// (Clicks scroll straight away in their handlers; this is then a no-op.)
	let scrolledTo: string | null = null;
	$effect(() => {
		const id = selectedEvent?.id ?? null;
		mainHeight; // re-run once the layout has been measured
		untrack(() => {
			if (!id || id === scrolledTo || !timelineViz) return;
			const firstLoad = scrolledTo === null;
			if (timelineViz.ensureVisible(id, firstLoad)) scrolledTo = id;
		});
	});

	// Once the sheet has resized, make sure the selected dot isn't hidden behind it.
	$effect(() => {
		if (!narrow || !selectedEvent) return;
		const id = selectedEvent.id;
		sheetSnap;
		mainHeight;
		const t = setTimeout(() => timelineViz?.ensureVisible(id), 320);
		return () => clearTimeout(t);
	});

	const selectedConnections = $derived(
		selectedEvent ? (lookup.connections.get(selectedEvent.id) ?? []) : []
	);

	/**
	 * `from` decides the history entry (see #lib/utils/history) and the sheet height on phones:
	 * a timeline tap shows the peek card, a search pick opens the details, and links inside the
	 * sheet keep its current height.
	 */
	function handleSelectEvent(event: TimelineEvent, from: Exclude<SelectSource, 'step'>) {
		const wasOpen = panelOpen;
		run(planSelect(here, event.id, from));
		scrolledTo = event.id;
		if (!narrow) {
			timelineViz?.scrollToEvent(event.id);
			return;
		}
		if (from === 'timeline') sheetSnap = 'peek';
		else if (from === 'search' || !wasOpen || sheetSnap === 'peek') sheetSnap = 'half';
		if (from !== 'timeline') timelineViz?.scrollToEvent(event.id);
	}

	function handleStep(event: TimelineEvent) {
		run(planSelect(here, event.id, 'step'));
		scrolledTo = event.id;
		timelineViz?.ensureVisible(event.id);
	}

	function handleClosePanel() {
		run(planClose(here));
	}

	function handleBackToResults() {
		run(planBackToResults(here));
	}

	function handleShowAllResults() {
		searchTerm = query; // skip the debounce
		run(planShowResults(here));
		if (sheetSnap === 'peek') sheetSnap = 'half';
	}

	function handleQueryInput() {
		// Typing while browsing search results returns to the (live-updating) list.
		run(planEditQuery(here));
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && panelOpen) handleClosePanel();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{@render children()}

<div class="app">
	<header class="header">
		<div class="header-inner">
			<h1 class="site-title">Human History</h1>
			<span class="site-subtitle">3,000,000 BCE &ndash; Present</span>
		</div>
		<SearchBar
			bind:query
			{searchTerm}
			{hits}
			suppressDropdown={resultsOpen}
			onSelect={(e) => handleSelectEvent(e, 'search')}
			onShowAll={handleShowAllResults}
			onInput={handleQueryInput}
		/>
	</header>

	<main class="main" class:panel-open={panelOpen} class:narrow bind:clientHeight={mainHeight}>
		<div class="timeline-pane" onpointerdowncapture={dismissHint}>
			<TimelineViz
				bind:this={timelineViz}
				{continents}
				onSelectEvent={(e) => handleSelectEvent(e, 'timeline')}
				selectedId={selectedEvent?.id ?? null}
				{highlightIds}
				compact={narrowScreen.current}
				touch={coarsePointer.current}
				onTapEmpty={() => narrow && sheetSnap === 'peek' && handleClosePanel()}
			/>
			{#if hintVisible}
				<div class="touch-hint" role="status">Pinch to zoom · tap a dot</div>
			{/if}
		</div>
		{#snippet panelContent()}
			{#if selectedEvent}
				<DetailPanel
					event={selectedEvent}
					connections={selectedConnections}
					onSelectEvent={(e) => handleSelectEvent(e, 'connection')}
				/>
			{:else if resultsOpen}
				<SearchResults
					{searchTerm}
					{hits}
					pending={query !== searchTerm}
					bind:sort={resultsSort}
					bind:scrollTop={resultsScrollTop}
					onSelectEvent={(e) => handleSelectEvent(e, 'results')}
				/>
			{/if}
		{/snippet}

		{#if narrow}
			{#if panelOpen}
				<BottomSheet
					snap={sheetSnap}
					heights={sheetHeights}
					onSnapChange={handleSnapChange}
					onClose={handleClosePanel}
				>
					{#snippet header()}
						{#if sheetSnap === 'peek' && selectedEvent && selectedLane}
							<EventPeek
								event={selectedEvent}
								continentName={selectedLane.continent.name}
								continentColor={selectedLane.continent.color}
								prev={selectedLane.prev}
								next={selectedLane.next}
								onStep={handleStep}
								onOpen={() => handleSnapChange('half')}
								onClose={handleClosePanel}
							/>
						{:else if sheetSnap === 'peek'}
							<button class="sheet-summary" type="button" onclick={() => handleSnapChange('half')}>
								{hits.length} results for &ldquo;{searchTerm.trim()}&rdquo; &uarr;
							</button>
						{:else}
							<div class="sheet-bar">
								{#if resultsOpen && selectedEvent}
									<button class="back-btn" type="button" onclick={handleBackToResults}
										>&larr; Back to results</button
									>
								{/if}
								<button class="close-btn" type="button" onclick={handleClosePanel} aria-label="Close"
									>&#x2715;</button
								>
							</div>
						{/if}
					{/snippet}
					{@render panelContent()}
				</BottomSheet>
			{/if}
		{:else}
			<SidePanel
				open={panelOpen}
				onClose={handleClosePanel}
				onBack={resultsOpen && selectedEvent ? handleBackToResults : undefined}
			>
				{@render panelContent()}
			</SidePanel>
		{/if}
	</main>
</div>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background: var(--bg);
		color: var(--text);
		font-family: 'Cousine', 'Courier New', monospace;
		-webkit-font-smoothing: antialiased;
		overflow: hidden;
	}

	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		height: 100dvh;
	}

	.header {
		height: 52px;
		background: var(--bg);
		border-bottom: 1px solid var(--border-faint);
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 16px;
		gap: 16px;
		position: relative;
	}

	.header-inner {
		padding: 0 24px;
		display: flex;
		align-items: baseline;
		gap: 16px;
	}

	.site-title {
		font-family: var(--font-display);
		font-size: 15px;
		font-weight: 700;
		color: var(--text-strong);
		letter-spacing: -0.02em;
	}

	.site-subtitle {
		font-size: 11px;
		font-family: 'Cousine', 'Courier New', monospace;
		color: var(--text-faint);
		letter-spacing: 0.04em;
	}

	.main {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.timeline-pane {
		width: 100%;
		transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.main.panel-open .timeline-pane {
		width: 33.333%;
	}

	.main.narrow {
		flex-direction: column;
	}

	.main.narrow .timeline-pane {
		width: 100%;
		flex: 1;
		min-height: 0;
		transition: none;
	}

	.timeline-pane {
		position: relative;
	}

	.touch-hint {
		position: absolute;
		left: 50%;
		bottom: 20px;
		transform: translateX(-50%);
		z-index: 6;
		padding: 9px 16px;
		border-radius: 999px;
		background: rgba(14, 44, 92, 0.95);
		border: 1px solid var(--border-strong);
		color: var(--text-strong);
		font-size: 13px;
		white-space: nowrap;
		pointer-events: none;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
		animation: hint-in 0.4s ease-out 0.6s both;
	}

	@keyframes hint-in {
		from {
			opacity: 0;
			transform: translate(-50%, 8px);
		}
	}

	.sheet-bar {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 12px 4px 20px;
		min-height: 40px;
	}

	.back-btn {
		background: none;
		border: none;
		color: var(--link);
		font: inherit;
		font-size: 14px;
		cursor: pointer;
		padding: 8px 0;
	}

	.close-btn {
		margin-left: auto;
		background: none;
		border: none;
		color: var(--text-dim);
		font-size: 15px;
		width: 40px;
		height: 40px;
		cursor: pointer;
	}

	.sheet-summary {
		display: block;
		width: 100%;
		padding: 16px 20px;
		background: none;
		border: none;
		color: var(--text);
		font: inherit;
		font-size: 15px;
		text-align: left;
		cursor: pointer;
	}

	@media (max-width: 767px) {
		.header {
			height: 48px;
			padding-right: 8px;
		}

		.header-inner {
			padding: 0 16px;
		}

		.site-subtitle {
			display: none;
		}
	}
</style>
