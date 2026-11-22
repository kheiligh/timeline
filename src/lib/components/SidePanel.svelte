<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		open: boolean;
		onClose: () => void;
		/** When set, shows a "← Back to results" link. */
		onBack?: () => void;
		children: Snippet;
	}

	let { open, onClose, onBack, children }: Props = $props();
</script>

<aside class="panel" class:open>
	{#if open}
		<div class="bar">
			{#if onBack}
				<button class="back-btn" type="button" onclick={onBack}>&larr; Back to results</button>
			{/if}
			<button class="close-btn" type="button" onclick={onClose} aria-label="Close">&#x2715;</button>
		</div>
		<div class="content">
			{@render children()}
		</div>
	{/if}
</aside>

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
		display: flex;
		flex-direction: column;
	}

	.panel.open {
		width: 66.667%;
		opacity: 1;
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 20px 36px 0;
		flex-shrink: 0;
	}

	.content {
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
	}

	.back-btn {
		background: none;
		border: none;
		color: #7a7ac8;
		font: inherit;
		font-size: 13px;
		cursor: pointer;
		padding: 0;
	}

	.back-btn:hover {
		color: #aaaaee;
	}

	.close-btn {
		margin-left: auto;
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
		transition:
			color 0.15s,
			border-color 0.15s;
	}

	.close-btn:hover {
		color: #e8e0d0;
		border-color: #6a6a8a;
	}
</style>
