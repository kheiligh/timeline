<script lang="ts">
	import type { TimelineEvent } from '#lib/types';
	import { eventPath, type Connection } from '#lib/data/lookup';
	import { interceptClick } from '#lib/utils/links';
	import { coarsePointer } from '#lib/utils/media.svelte';
	import { formatYear } from '#lib/utils/timeline';

	interface Props {
		event: TimelineEvent;
		connections?: Connection[];
		onSelectEvent?: (event: TimelineEvent) => void;
	}

	let { event, connections = [], onSelectEvent }: Props = $props();

	// --- Share / copy link ---
	type ShareStatus = 'idle' | 'copied' | 'failed';
	let shareStatus = $state<ShareStatus>('idle');
	let resetTimer: ReturnType<typeof setTimeout> | undefined;

	// A new event starts with a fresh button.
	$effect(() => {
		event.id;
		shareStatus = 'idle';
		return () => clearTimeout(resetTimer);
	});

	// Phones get the system share sheet where there is one; everything else copies the link.
	const useShareSheet = $derived(coarsePointer.current && typeof navigator !== 'undefined' && !!navigator.share);

	async function share() {
		const url = new URL(eventPath(event.id), location.origin).href;
		if (useShareSheet) {
			try {
				await navigator.share({ title: event.title, url });
			} catch {
				// Dismissed by the visitor: nothing to do.
			}
			return;
		}
		try {
			await navigator.clipboard.writeText(url);
			shareStatus = 'copied';
		} catch {
			shareStatus = 'failed';
		}
		clearTimeout(resetTimer);
		resetTimer = setTimeout(() => (shareStatus = 'idle'), 2000);
	}
</script>

<div class="panel-inner">
	<div class="year-badge">
		{formatYear(event.year)}
		{#if event.endYear}
			<span class="year-sep">–</span>
			{formatYear(event.endYear)}
		{/if}
	</div>

	<h2 class="event-title">{event.title}</h2>

	{#if event.tags && event.tags.length > 0}
		<div class="tags">
			{#each event.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	{/if}

	<div class="section">
		<h3 class="section-label">What happened</h3>
		<p class="body-text">{event.description}</p>
	</div>

	<div class="section significance">
		<h3 class="section-label">So what?</h3>
		<p class="body-text">{event.significance}</p>
	</div>

	{#if connections.length > 0}
		<div class="section connections">
			<h3 class="section-label">Connections</h3>
			<ul class="connection-list">
				{#each connections as connection (connection.event.id)}
					<li>
						<a
							class="connection"
							href={eventPath(connection.event.id)}
							onclick={interceptClick(() => onSelectEvent?.(connection.event))}
						>
							<span class="connection-meta">
								<span class="connection-dot" style="background: {connection.continentColor};"></span>
								{connection.continentName} · {formatYear(connection.event.year)}
							</span>
							<span class="connection-title">{connection.event.title}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="links">
		{#if event.wikipediaSlug}
			<a
				class="wiki-link"
				href="https://en.wikipedia.org/wiki/{event.wikipediaSlug}"
				target="_blank"
				rel="noopener noreferrer"
			>
				Read on Wikipedia
				<span class="arrow">&#x2197;</span>
			</a>
		{/if}
		<button class="share-btn" type="button" onclick={share}>
			{#if useShareSheet}
				Share
			{:else if shareStatus === 'copied'}
				Link copied
			{:else if shareStatus === 'failed'}
				Couldn&rsquo;t copy
			{:else}
				Copy link
			{/if}
		</button>
	</div>
	<span class="visually-hidden" role="status">{shareStatus === 'copied' ? 'Link copied' : ''}</span>
</div>

<style>
	.panel-inner {
		flex: 1;
		padding: 16px 36px 40px;
		overflow-y: auto;
	}

	.year-badge {
		font-family: 'Cousine', 'Courier New', monospace;
		font-size: 12px;
		color: var(--text-muted);
		letter-spacing: 0.05em;
		margin-bottom: 12px;
	}

	.year-sep {
		margin: 0 4px;
	}

	.event-title {
		font-family: var(--font-display);
		font-size: 26px;
		font-weight: 700;
		color: var(--text-strong);
		line-height: 1.2;
		margin: 0 0 16px 0;
		letter-spacing: -0.02em;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 24px;
	}

	.tag {
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-dim);
		background: var(--surface-hover);
		padding: 3px 8px;
		border-radius: 3px;
		border: 1px solid var(--border);
	}

	.section {
		margin-bottom: 24px;
	}

	.section-label {
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-dim);
		margin: 0 0 8px 0;
	}

	.body-text {
		font-size: 15px;
		color: var(--text);
		line-height: 1.65;
		margin: 0;
	}

	.significance {
		background: var(--surface-raised);
		border-left: 3px solid var(--border-strong);
		padding: 16px 20px;
		border-radius: 0 6px 6px 0;
	}

	.significance .section-label {
		color: var(--text-dim);
	}

	.significance .body-text {
		color: var(--text);
	}

	.connection-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.connection {
		width: 100%;
		text-align: left;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 8px 12px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 2px;
		font: inherit;
		color: inherit;
		text-decoration: none;
		transition: border-color 0.15s, background 0.15s;
	}

	.connection:hover,
	.connection:focus-visible {
		border-color: var(--border-focus);
		background: var(--surface-hover);
	}

	.connection-meta {
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: 'Cousine', 'Courier New', monospace;
		font-size: 11px;
		color: var(--text-muted);
	}

	.connection-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.connection-title {
		font-family: var(--font-display);
		font-size: 14px;
		color: var(--text);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 12px 24px;
		margin-top: 28px;
	}

	.wiki-link,
	.share-btn {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 13px;
		color: var(--link);
		text-decoration: none;
		border-bottom: 1px solid var(--border-strong);
		padding-bottom: 2px;
		transition: color 0.15s, border-color 0.15s;
	}

	.share-btn {
		font-family: inherit;
		background: none;
		border: none;
		border-bottom: 1px solid var(--border-strong);
		border-radius: 0;
		cursor: pointer;
	}

	.wiki-link:hover,
	.share-btn:hover,
	.share-btn:focus-visible {
		color: var(--link-hover);
		border-color: var(--border-hover);
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	.arrow {
		font-size: 12px;
	}

	@media (max-width: 767px) {
		.panel-inner {
			padding: 0 20px 32px;
		}

		.event-title {
			font-size: 22px;
		}
	}
</style>
