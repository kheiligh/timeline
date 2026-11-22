<script lang="ts">
	import TimelineViz from '#lib/components/TimelineViz.svelte';
	import DetailPanel from '#lib/components/DetailPanel.svelte';
	import SidePanel from '#lib/components/SidePanel.svelte';
	import BottomSheet, { type SheetSnap } from '#lib/components/BottomSheet.svelte';
	import EventPeek from '#lib/components/EventPeek.svelte';
	import SearchBar from '#lib/components/SearchBar.svelte';
	import SearchResults, { type ResultsSort } from '#lib/components/SearchResults.svelte';
	import { continents } from '#lib/data/continents';
	import type { TimelineEvent } from '#lib/types';
	import { narrowScreen } from '#lib/utils/media.svelte';
	import { buildSearchIndex, search, MIN_QUERY_LENGTH, type SearchHit } from '#lib/utils/search';

	const SEARCH_DEBOUNCE_MS = 150;

	let selectedEvent = $state<TimelineEvent | null>(null);
	let timelineViz = $state<ReturnType<typeof TimelineViz> | null>(null);

	// --- Search ---
	const searchIndex = buildSearchIndex(continents);
	let query = $state('');
	let searchTerm = $state(''); // debounced copy of `query`
	let resultsOpen = $state(false); // full results view is part of the panel stack
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
	let sheetSnap = $state<SheetSnap>('peek');
	const sheetHeights = $derived<Record<SheetSnap, number>>({
		peek: PEEK_HEIGHT,
		half: Math.max(PEEK_HEIGHT + 80, Math.round(mainHeight * 0.55)),
		full: mainHeight
	});

	// Each event's continent and its neighbours in the same lane, for the peek card's ‹ › stepping.
	const laneInfo = (() => {
		const info = new Map<
			string,
			{ continent: (typeof continents)[number]; prev: TimelineEvent | null; next: TimelineEvent | null }
		>();
		for (const continent of continents) {
			continent.events.forEach((event, i, events) => {
				info.set(event.id, {
					continent,
					prev: events[i - 1] ?? null,
					next: events[i + 1] ?? null
				});
			});
		}
		return info;
	})();
	const selectedLane = $derived(selectedEvent ? laneInfo.get(selectedEvent.id) : undefined);

	// Once the sheet has resized, make sure the selected dot isn't hidden behind it.
	$effect(() => {
		if (!narrow || !selectedEvent) return;
		const id = selectedEvent.id;
		sheetSnap;
		mainHeight;
		const t = setTimeout(() => timelineViz?.ensureVisible(id), 320);
		return () => clearTimeout(t);
	});

	type Connection = { event: TimelineEvent; continentName: string; continentColor: string };

	// Cross-references are treated as bidirectional: if A lists B, B also links back to A.
	const connectionsById = (() => {
		const lookup = new Map<string, Connection>();
		for (const continent of continents) {
			for (const event of continent.events) {
				lookup.set(event.id, {
					event,
					continentName: continent.name,
					continentColor: continent.color
				});
			}
		}
		const ids = new Map<string, Set<string>>();
		const link = (a: string, b: string) => {
			if (!ids.has(a)) ids.set(a, new Set());
			ids.get(a)!.add(b);
		};
		for (const { event } of lookup.values()) {
			for (const relatedId of event.related ?? []) {
				if (!lookup.has(relatedId) || relatedId === event.id) continue;
				link(event.id, relatedId);
				link(relatedId, event.id);
			}
		}
		const result = new Map<string, Connection[]>();
		for (const [id, set] of ids) {
			result.set(
				id,
				[...set].map((rid) => lookup.get(rid)!).sort((a, b) => a.event.year - b.event.year)
			);
		}
		return result;
	})();

	const selectedConnections = $derived(
		selectedEvent ? (connectionsById.get(selectedEvent.id) ?? []) : []
	);

	/**
	 * `from` decides the sheet height on phones: a timeline tap or ‹ › step shows the peek card,
	 * a search pick opens the details, and links inside the sheet keep its current height.
	 */
	function handleSelectEvent(event: TimelineEvent, from: 'timeline' | 'search' | 'sheet' = 'sheet') {
		const wasOpen = panelOpen;
		selectedEvent = event;
		if (!narrow) {
			timelineViz?.scrollToEvent(event.id);
			return;
		}
		if (from === 'timeline') sheetSnap = 'peek';
		else if (from === 'search' || !wasOpen || sheetSnap === 'peek') sheetSnap = 'half';
		if (from !== 'timeline') timelineViz?.scrollToEvent(event.id);
	}

	function handleStep(event: TimelineEvent) {
		selectedEvent = event;
		timelineViz?.ensureVisible(event.id);
	}

	function handleClosePanel() {
		selectedEvent = null;
		resultsOpen = false;
	}

	function handleShowAllResults() {
		searchTerm = query; // skip the debounce
		selectedEvent = null;
		resultsOpen = true;
		if (sheetSnap === 'peek') sheetSnap = 'half';
	}

	function handleQueryInput() {
		// Typing while browsing search results returns to the (live-updating) list.
		if (resultsOpen) selectedEvent = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && panelOpen) handleClosePanel();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>Human History Timeline</title>
</svelte:head>

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
		<div class="timeline-pane">
			<TimelineViz
				bind:this={timelineViz}
				{continents}
				onSelectEvent={(e) => handleSelectEvent(e, 'timeline')}
				selectedId={selectedEvent?.id ?? null}
				{highlightIds}
				compact={narrowScreen.current}
			/>
		</div>
		{#snippet panelContent()}
			{#if selectedEvent}
				<DetailPanel
					event={selectedEvent}
					connections={selectedConnections}
					onSelectEvent={(e) => handleSelectEvent(e)}
				/>
			{:else if resultsOpen}
				<SearchResults
					{searchTerm}
					{hits}
					pending={query !== searchTerm}
					bind:sort={resultsSort}
					bind:scrollTop={resultsScrollTop}
					onSelectEvent={(e) => handleSelectEvent(e)}
				/>
			{/if}
		{/snippet}

		{#if narrow}
			{#if panelOpen}
				<BottomSheet
					snap={sheetSnap}
					heights={sheetHeights}
					onSnapChange={(s) => (sheetSnap = s)}
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
								onOpen={() => (sheetSnap = 'half')}
								onClose={handleClosePanel}
							/>
						{:else if sheetSnap === 'peek'}
							<button class="sheet-summary" type="button" onclick={() => (sheetSnap = 'half')}>
								{hits.length} results for &ldquo;{searchTerm.trim()}&rdquo; &uarr;
							</button>
						{:else}
							<div class="sheet-bar">
								{#if resultsOpen && selectedEvent}
									<button class="back-btn" type="button" onclick={() => (selectedEvent = null)}
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
				onBack={resultsOpen && selectedEvent ? () => (selectedEvent = null) : undefined}
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
		background: #0d0d12;
		color: #e8e0d0;
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
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
		background: #0d0d12;
		border-bottom: 1px solid #1e1e2e;
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
		font-size: 15px;
		font-weight: 700;
		color: #e8e0d0;
		letter-spacing: -0.02em;
	}

	.site-subtitle {
		font-size: 11px;
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		color: #4a4a6a;
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
		color: #7a7ac8;
		font: inherit;
		font-size: 14px;
		cursor: pointer;
		padding: 8px 0;
	}

	.close-btn {
		margin-left: auto;
		background: none;
		border: none;
		color: #6a6a8a;
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
		color: #c0b8b0;
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
