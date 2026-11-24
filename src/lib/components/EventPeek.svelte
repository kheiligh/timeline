<script lang="ts">
	import type { TimelineEvent } from '#lib/types';
	import { formatYear } from '#lib/utils/timeline';

	interface Props {
		event: TimelineEvent;
		continentName: string;
		continentColor: string;
		/** Previous/next event in the same continent lane; null at either end. */
		prev: TimelineEvent | null;
		next: TimelineEvent | null;
		onStep: (event: TimelineEvent) => void;
		onOpen: () => void;
		onClose: () => void;
	}

	let { event, continentName, continentColor, prev, next, onStep, onOpen, onClose }: Props =
		$props();
</script>

<div class="peek">
	<button
		class="step"
		type="button"
		aria-label={prev ? `Previous: ${prev.title}` : 'No earlier event'}
		disabled={!prev}
		onclick={() => prev && onStep(prev)}>&#x2039;</button
	>

	<button class="summary" type="button" onclick={onOpen}>
		<span class="meta">
			<span class="dot" style="background: {continentColor};"></span>
			{continentName} · {formatYear(event.year)}{#if event.endYear}&nbsp;– {formatYear(event.endYear)}{/if}
		</span>
		<span class="title">{event.title}</span>
		<span class="open">Details &uarr;</span>
	</button>

	<button
		class="step"
		type="button"
		aria-label={next ? `Next: ${next.title}` : 'No later event'}
		disabled={!next}
		onclick={() => next && onStep(next)}>&#x203A;</button
	>

	<button class="close" type="button" aria-label="Close" onclick={onClose}>&#x2715;</button>
</div>

<style>
	.peek {
		position: relative;
		display: flex;
		align-items: stretch;
		gap: 4px;
		padding: 0 8px 10px;
	}

	.step {
		flex-shrink: 0;
		width: 44px;
		background: none;
		border: none;
		color: #9a9ab8;
		font-size: 30px;
		line-height: 1;
		cursor: pointer;
		border-radius: 8px;
	}

	.step:active:not(:disabled) {
		background: #1e1e32;
	}

	.step:disabled {
		color: #2e2e44;
		cursor: default;
	}

	.summary {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 3px;
		padding: 4px 28px 4px 4px;
		background: none;
		border: none;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: 'Cousine', 'Courier New', monospace;
		font-size: 11px;
		color: #8a8aaa;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.title {
		font-family: var(--font-display);
		font-size: 16px;
		font-weight: 600;
		color: #e8e0d0;
		line-height: 1.25;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.open {
		font-size: 12px;
		color: #7a7ac8;
	}

	.close {
		position: absolute;
		top: -8px;
		right: 56px;
		width: 32px;
		height: 32px;
		background: none;
		border: none;
		color: #5a5a7a;
		font-size: 13px;
		cursor: pointer;
	}
</style>
