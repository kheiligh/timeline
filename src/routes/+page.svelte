<script lang="ts">
	import TimelineViz from '#lib/components/TimelineViz.svelte';
	import DetailPanel from '#lib/components/DetailPanel.svelte';
	import { continents } from '#lib/data/continents';
	import type { TimelineEvent } from '#lib/types';

	let selectedEvent = $state<TimelineEvent | null>(null);

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
	}

	function handleClosePanel() {
		selectedEvent = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && selectedEvent) {
			selectedEvent = null;
		}
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
	</header>

	<main class="main" class:panel-open={!!selectedEvent}>
		<div class="timeline-pane">
			<TimelineViz {continents} onSelectEvent={handleSelectEvent} />
		</div>
		<DetailPanel
			event={selectedEvent}
			connections={selectedConnections}
			onSelectEvent={handleSelectEvent}
			onClose={handleClosePanel}
		/>
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
	}

	.header {
		height: 52px;
		background: #0d0d12;
		border-bottom: 1px solid #1e1e2e;
		flex-shrink: 0;
		display: flex;
		align-items: center;
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
</style>
