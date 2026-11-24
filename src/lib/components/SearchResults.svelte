<script lang="ts">
	import type { TimelineEvent } from '#lib/types';
	import { eventPath } from '#lib/data/lookup';
	import { interceptClick } from '#lib/utils/links';
	import { formatYear } from '#lib/utils/timeline';
	import { MIN_QUERY_LENGTH, NO_RESULTS_MESSAGE, tokenize, type SearchHit } from '#lib/utils/search';
	import Highlight from './Highlight.svelte';

	export type ResultsSort = 'relevance' | 'date';

	interface Props {
		searchTerm: string;
		hits: SearchHit[];
		pending: boolean;
		sort: ResultsSort;
		/** Kept by the parent so "Back to results" returns to the same spot. */
		scrollTop: number;
		onSelectEvent: (event: TimelineEvent) => void;
	}

	let {
		searchTerm,
		hits,
		pending,
		sort = $bindable(),
		scrollTop = $bindable(),
		onSelectEvent
	}: Props = $props();

	let listEl = $state<HTMLDivElement | null>(null);

	const ready = $derived(searchTerm.trim().length >= MIN_QUERY_LENGTH);
	const tokens = $derived(tokenize(searchTerm));
	const sorted = $derived(
		sort === 'date' ? [...hits].sort((a, b) => a.event.year - b.event.year) : hits
	);

	$effect(() => {
		if (listEl && Math.abs(listEl.scrollTop - scrollTop) > 1) listEl.scrollTop = scrollTop;
	});
</script>

<div class="results" bind:this={listEl} onscroll={() => listEl && (scrollTop = listEl.scrollTop)}>
	{#if !ready}
		<p class="hint">Keep typing&hellip;</p>
	{:else}
		<div class="head">
			<h2 class="heading">
				{hits.length}
				{hits.length === 1 ? 'result' : 'results'} for &ldquo;{searchTerm.trim()}&rdquo;
			</h2>
			{#if hits.length > 1}
				<div class="sort" role="group" aria-label="Sort results">
					<button type="button" class:active={sort === 'relevance'} onclick={() => (sort = 'relevance')}
						>Relevance</button
					>
					<button type="button" class:active={sort === 'date'} onclick={() => (sort = 'date')}>Date</button>
				</div>
			{/if}
		</div>

		{#if hits.length === 0}
			{#if !pending}
				<p class="empty">{NO_RESULTS_MESSAGE}</p>
			{/if}
		{:else}
			<ul class="list">
				{#each sorted as hit (hit.event.id)}
					<li>
						<a
							class="hit"
							href={eventPath(hit.event.id)}
							onclick={interceptClick(() => onSelectEvent(hit.event))}
						>
							<span class="meta">
								<span class="dot" style="background: {hit.continent.color};"></span>
								{hit.continent.name} · {formatYear(hit.event.year)}
							</span>
							<span class="title"><Highlight text={hit.event.title} {tokens} /></span>
							{#if hit.snippet}
								<span class="snippet">
									{#if hit.snippet.kind === 'tag'}
										<span class="snippet-label">tag</span>
									{/if}
									<Highlight text={hit.snippet.text} {tokens} />
								</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style>
	.results {
		flex: 1;
		overflow-y: auto;
		padding: 16px 36px 40px;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 16px;
	}

	.heading {
		font-size: 20px;
		font-weight: 700;
		color: var(--text-strong);
		letter-spacing: -0.02em;
	}

	.sort {
		display: flex;
		border: 1px solid var(--border);
		border-radius: 5px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.sort button {
		background: none;
		border: none;
		color: var(--text-dim);
		font: inherit;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 5px 10px;
		cursor: pointer;
	}

	.sort button.active {
		background: var(--surface-hover);
		color: var(--text-strong);
	}

	.list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.hit {
		width: 100%;
		text-align: left;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 10px 14px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 3px;
		font: inherit;
		color: inherit;
		text-decoration: none;
		transition:
			border-color 0.15s,
			background 0.15s;
	}

	.hit:hover,
	.hit:focus-visible {
		border-color: var(--border-focus);
		background: var(--surface-hover);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: 'Cousine', 'Courier New', monospace;
		font-size: 11px;
		color: var(--text-muted);
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.title {
		font-family: var(--font-display);
		font-size: 15px;
		color: var(--text-strong);
	}

	.snippet {
		font-size: 13px;
		color: var(--text-muted);
		line-height: 1.45;
	}

	.snippet-label {
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-dim);
		background: var(--surface-hover);
		border: 1px solid var(--border);
		border-radius: 3px;
		padding: 1px 5px;
		margin-right: 4px;
	}

	.hint,
	.empty {
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-muted);
		margin-top: 8px;
	}

	@media (max-width: 767px) {
		.results {
			padding: 8px 20px 32px;
		}
	}
</style>
