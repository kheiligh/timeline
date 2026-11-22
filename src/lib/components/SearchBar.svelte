<script lang="ts">
	import type { TimelineEvent } from '#lib/types';
	import { formatYear } from '#lib/utils/timeline';
	import { MIN_QUERY_LENGTH, NO_RESULTS_MESSAGE, tokenize, type SearchHit } from '#lib/utils/search';
	import Highlight from './Highlight.svelte';

	const DROPDOWN_LIMIT = 10;

	interface Props {
		query: string;
		/** The (debounced) term that `hits` were computed for. */
		searchTerm: string;
		hits: SearchHit[];
		/** True while the full results panel is showing; the dropdown stays out of the way. */
		suppressDropdown: boolean;
		onSelect: (event: TimelineEvent) => void;
		onShowAll: () => void;
		onInput?: () => void;
	}

	let {
		query = $bindable(),
		searchTerm,
		hits,
		suppressDropdown,
		onSelect,
		onShowAll,
		onInput
	}: Props = $props();

	let inputEl = $state<HTMLInputElement | null>(null);
	let expanded = $state(false);
	let focused = $state(false);
	let dropdownOpen = $state(false);
	let activeIndex = $state(-1);

	const queryReady = $derived(query.trim().length >= MIN_QUERY_LENGTH);
	const termReady = $derived(searchTerm.trim().length >= MIN_QUERY_LENGTH);
	const pending = $derived(query !== searchTerm);
	const visibleHits = $derived(hits.slice(0, DROPDOWN_LIMIT));
	const tokens = $derived(tokenize(searchTerm));
	const showDropdown = $derived(
		dropdownOpen && focused && !suppressDropdown && queryReady && termReady
	);

	$effect(() => {
		hits;
		activeIndex = -1;
	});

	function expandAndFocus() {
		expanded = true;
		// Input is always in the DOM; focus after the expand class applies.
		queueMicrotask(() => inputEl?.focus());
	}

	function collapse() {
		expanded = false;
		dropdownOpen = false;
		inputEl?.blur();
	}

	function handleIconClick() {
		if (expanded && !query.trim()) collapse();
		else expandAndFocus();
	}

	function handleInput() {
		dropdownOpen = true;
		onInput?.();
	}

	function handleBlur() {
		focused = false;
		dropdownOpen = false;
		if (!query.trim()) expanded = false;
	}

	function select(hit: SearchHit) {
		dropdownOpen = false;
		inputEl?.blur();
		onSelect(hit.event);
	}

	function showAll() {
		if (!queryReady) return;
		dropdownOpen = false;
		onShowAll();
	}

	function clear() {
		query = '';
		onInput?.();
		collapse();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			// Step back one layer at a time: dropdown → query → (window handler) panel.
			if (showDropdown) {
				dropdownOpen = false;
				e.stopPropagation();
			} else if (query) {
				clear();
				e.stopPropagation();
			} else {
				collapse();
			}
			return;
		}
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (!showDropdown) dropdownOpen = true;
			else activeIndex = Math.min(visibleHits.length - 1, activeIndex + 1);
			return;
		}
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			activeIndex = Math.max(-1, activeIndex - 1);
			return;
		}
		if (e.key === 'Enter') {
			e.preventDefault();
			if (showDropdown && activeIndex >= 0 && visibleHits[activeIndex]) select(visibleHits[activeIndex]);
			else showAll();
		}
	}

	function isTypingTarget(target: EventTarget | null) {
		const el = target as HTMLElement | null;
		return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
	}

	function handleWindowKeydown(e: KeyboardEvent) {
		const isSlash = e.key === '/' && !e.metaKey && !e.ctrlKey && !isTypingTarget(e.target);
		const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
		if (!isSlash && !isCmdK) return;
		e.preventDefault();
		expandAndFocus();
		inputEl?.select();
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<div class="search" class:expanded>
	<div class="field">
		<button
			class="icon-btn"
			type="button"
			aria-label="Search events"
			title="Search (/ or ⌘K)"
			onmousedown={(e) => e.preventDefault()}
			onclick={handleIconClick}
		>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
				<line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
		<input
			bind:this={inputEl}
			bind:value={query}
			type="search"
			placeholder="Search events…"
			aria-label="Search events"
			autocomplete="off"
			spellcheck="false"
			tabindex={expanded ? 0 : -1}
			role="combobox"
			aria-expanded={showDropdown}
			aria-controls="search-dropdown"
			aria-activedescendant={activeIndex >= 0 ? `search-hit-${activeIndex}` : undefined}
			oninput={handleInput}
			onfocus={() => {
				focused = true;
				expanded = true;
				if (queryReady) dropdownOpen = true;
			}}
			onblur={handleBlur}
			onkeydown={handleKeydown}
		/>
		{#if expanded && query}
			<button
				class="clear-btn"
				type="button"
				aria-label="Clear search"
				onmousedown={(e) => e.preventDefault()}
				onclick={clear}>&#x2715;</button
			>
		{/if}
	</div>

	{#if showDropdown}
		<!-- mousedown is cancelled so clicking a result doesn't blur the input first -->
		<div
			class="dropdown"
			id="search-dropdown"
			role="listbox"
			tabindex="-1"
			onmousedown={(e) => e.preventDefault()}
		>
			{#if visibleHits.length === 0}
				{#if !pending}
					<p class="empty">{NO_RESULTS_MESSAGE}</p>
				{/if}
			{:else}
				<ul>
					{#each visibleHits as hit, i (hit.event.id)}
						<li>
							<button
								type="button"
								id="search-hit-{i}"
								role="option"
								aria-selected={i === activeIndex}
								class="hit"
								class:active={i === activeIndex}
								onmouseenter={() => (activeIndex = i)}
								onclick={() => select(hit)}
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
							</button>
						</li>
					{/each}
				</ul>
				{#if hits.length > DROPDOWN_LIMIT}
					<button type="button" class="see-all" onclick={showAll}>
						See all {hits.length} results &rarr;
					</button>
				{/if}
			{/if}
		</div>
	{/if}
</div>

<style>
	.search {
		position: relative;
	}

	.field {
		display: flex;
		align-items: center;
		height: 32px;
		border: 1px solid transparent;
		border-radius: 6px;
		transition:
			border-color 0.2s,
			background 0.2s;
	}

	.search.expanded .field {
		background: #12121c;
		border-color: #2a2a3a;
	}

	.search.expanded .field:focus-within {
		border-color: #4a4a7a;
	}

	.icon-btn {
		background: none;
		border: none;
		color: #6a6a8a;
		width: 32px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		flex-shrink: 0;
		border-radius: 6px;
		transition: color 0.15s;
	}

	.icon-btn:hover,
	.search.expanded .icon-btn {
		color: #c0b8b0;
	}

	input {
		width: 0;
		min-width: 0;
		padding: 0;
		border: none;
		outline: none;
		background: transparent;
		color: #e8e0d0;
		font: inherit;
		font-size: 13px;
		transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.search.expanded input {
		width: min(260px, 50vw);
	}

	input::-webkit-search-cancel-button {
		display: none;
	}

	input::placeholder {
		color: #4a4a6a;
	}

	.clear-btn {
		background: none;
		border: none;
		color: #5a5a7a;
		font-size: 11px;
		width: 26px;
		height: 26px;
		cursor: pointer;
		flex-shrink: 0;
	}

	.clear-btn:hover {
		color: #e8e0d0;
	}

	.dropdown {
		position: absolute;
		top: calc(100% + 6px);
		right: 0;
		width: min(440px, calc(100vw - 32px));
		max-height: calc(100vh - 80px);
		overflow-y: auto;
		background: #14141f;
		border: 1px solid #2a2a3a;
		border-radius: 8px;
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
		z-index: 100;
		padding: 6px;
	}

	ul {
		list-style: none;
	}

	.hit {
		width: 100%;
		text-align: left;
		background: none;
		border: none;
		border-radius: 5px;
		padding: 8px 10px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 2px;
		font: inherit;
		color: inherit;
	}

	.hit.active {
		background: #1e1e32;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 10.5px;
		color: #7a7a9a;
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.title {
		font-size: 14px;
		color: #e8e0d0;
	}

	.snippet {
		font-size: 12px;
		color: #8a8aa0;
		line-height: 1.4;
	}

	.snippet-label {
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #6a6a9a;
		background: #1e1e30;
		border: 1px solid #2a2a4a;
		border-radius: 3px;
		padding: 1px 5px;
		margin-right: 4px;
	}

	.see-all {
		display: block;
		width: 100%;
		margin-top: 4px;
		padding: 10px;
		background: none;
		border: none;
		border-top: 1px solid #22222f;
		color: #7a7ac8;
		font: inherit;
		font-size: 13px;
		text-align: left;
		cursor: pointer;
	}

	.see-all:hover {
		color: #aaaaee;
	}

	.empty {
		padding: 14px 12px;
		font-size: 13px;
		line-height: 1.5;
		color: #8a8aa0;
	}

	/* Phone layout: the icon expands into a full-width field over the site title. */
	@media (max-width: 767px) {
		.search.expanded {
			position: absolute;
			left: 8px;
			right: 8px;
			top: 50%;
			transform: translateY(-50%);
			z-index: 20;
		}

		.field {
			height: 36px;
		}

		.icon-btn {
			width: 40px;
			height: 36px;
		}

		.search.expanded input {
			flex: 1;
			width: auto;
			font-size: 16px; /* below 16px iOS Safari zooms the page on focus */
		}

		.clear-btn {
			width: 36px;
			height: 36px;
		}

		.dropdown {
			left: 0;
			right: 0;
			width: auto;
			max-height: calc(100dvh - 72px);
		}

		.hit {
			padding: 10px;
		}
	}
</style>
