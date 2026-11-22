<script lang="ts">
	import TimelineViz from '#lib/components/TimelineViz.svelte';
	import DetailPanel from '#lib/components/DetailPanel.svelte';
	import SidePanel from '#lib/components/SidePanel.svelte';
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

	function handleSelectEvent(event: TimelineEvent) {
		selectedEvent = event;
		timelineViz?.scrollToEvent(event.id);
	}

	function handleClosePanel() {
		selectedEvent = null;
		resultsOpen = false;
	}

	function handleShowAllResults() {
		searchTerm = query; // skip the debounce
		selectedEvent = null;
		resultsOpen = true;
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
			onSelect={handleSelectEvent}
			onShowAll={handleShowAllResults}
			onInput={handleQueryInput}
		/>
	</header>

	<main class="main" class:panel-open={panelOpen}>
		<div class="timeline-pane">
			<TimelineViz
				bind:this={timelineViz}
				{continents}
				onSelectEvent={handleSelectEvent}
				selectedId={selectedEvent?.id ?? null}
				{highlightIds}
				compact={narrowScreen.current}
			/>
		</div>
		<SidePanel
			open={panelOpen}
			onClose={handleClosePanel}
			onBack={resultsOpen && selectedEvent ? () => (selectedEvent = null) : undefined}
		>
			{#if selectedEvent}
				<DetailPanel
					event={selectedEvent}
					connections={selectedConnections}
					onSelectEvent={handleSelectEvent}
				/>
			{:else if resultsOpen}
				<SearchResults
					{searchTerm}
					{hits}
					pending={query !== searchTerm}
					bind:sort={resultsSort}
					bind:scrollTop={resultsScrollTop}
					onSelectEvent={handleSelectEvent}
				/>
			{/if}
		</SidePanel>
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
