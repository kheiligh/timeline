<script lang="ts">
	import { highlightSegments } from '#lib/utils/search';

	interface Props {
		text: string;
		tokens: string[];
	}

	let { text, tokens }: Props = $props();

	const segments = $derived(highlightSegments(text, tokens));
</script>

{#each segments as segment}{#if segment.match}<mark>{segment.text}</mark>{:else}{segment.text}{/if}{/each}

<style>
	mark {
		background: rgba(240, 180, 101, 0.22);
		color: inherit;
		border-radius: 2px;
		padding: 0 1px;
	}
</style>
