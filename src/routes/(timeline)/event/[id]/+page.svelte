<script lang="ts">
	import PageHead from '#lib/components/PageHead.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageHead meta={data.meta} type="article" />
