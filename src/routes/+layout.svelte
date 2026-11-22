<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<!-- The favicon is chosen at random by an inline script in src/app.html. -->
{@render children()}
