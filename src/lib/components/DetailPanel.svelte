<script lang="ts">
	import type { TimelineEvent } from '#lib/types';
	import { formatYear } from '#lib/utils/timeline';

	interface Props {
		event: TimelineEvent | null;
		onClose: () => void;
	}

	let { event, onClose }: Props = $props();
</script>

<div class="panel" class:open={!!event}>
	{#if event}
		<div class="panel-inner">
			<button class="close-btn" onclick={onClose} aria-label="Close">&#x2715;</button>

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
		</div>
	{/if}
</div>

<style>
	.panel {
		width: 0;
		overflow: hidden;
		background: #12121c;
		border-left: 1px solid #2a2a3a;
		transition:
			width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
			opacity 0.35s ease;
		opacity: 0;
		flex-shrink: 0;
	}

	.panel.open {
		width: 66.667%;
		opacity: 1;
	}

	.panel-inner {
		padding: 40px 36px;
		height: 100%;
		overflow-y: auto;
		box-sizing: border-box;
	}

	.close-btn {
		float: right;
		background: none;
		border: 1px solid #3a3a5a;
		color: #6a6a8a;
		font-size: 14px;
		width: 28px;
		height: 28px;
		border-radius: 4px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.15s, border-color 0.15s;
	}

	.close-btn:hover {
		color: #e8e0d0;
		border-color: #6a6a8a;
	}

	.year-badge {
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 12px;
		color: #8a8aaa;
		letter-spacing: 0.05em;
		margin-bottom: 12px;
	}

	.year-sep {
		margin: 0 4px;
	}

	.event-title {
		font-size: 26px;
		font-weight: 700;
		color: #e8e0d0;
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
		color: #6a6a9a;
		background: #1e1e30;
		padding: 3px 8px;
		border-radius: 3px;
		border: 1px solid #2a2a4a;
	}

	.section {
		margin-bottom: 24px;
	}

	.section-label {
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #5a5a7a;
		margin: 0 0 8px 0;
	}

	.body-text {
		font-size: 15px;
		color: #c0b8b0;
		line-height: 1.65;
		margin: 0;
	}

	.significance {
		background: #15152a;
		border-left: 3px solid #3a3a6a;
		padding: 16px 20px;
		border-radius: 0 6px 6px 0;
	}

	.significance .section-label {
		color: #7a7aaa;
	}

	.significance .body-text {
		color: #d0c8c0;
	}

	.wiki-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		margin-top: 28px;
		font-size: 13px;
		color: #7a7ac8;
		text-decoration: none;
		border-bottom: 1px solid #3a3a6a;
		padding-bottom: 2px;
		transition: color 0.15s, border-color 0.15s;
	}

	.wiki-link:hover {
		color: #aaaaee;
		border-color: #6a6aaa;
	}

	.arrow {
		font-size: 12px;
	}
</style>
