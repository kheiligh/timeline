<script lang="ts">
	import { page } from '$app/state';
	import { SITE_NAME, type PageMeta } from '#lib/utils/meta';

	interface Props {
		meta: PageMeta;
		type?: 'website' | 'article';
	}

	let { meta, type = 'website' }: Props = $props();

	// Server-rendered, so link previews (Slack, iMessage, social) see the right text.
	const url = $derived(page.url.origin + page.url.pathname);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content="summary" />
</svelte:head>
