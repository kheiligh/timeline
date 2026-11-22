<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { Continent, TimelineEvent } from '#lib/types';
	import {
		computeBandPath,
		yearToPixel,
		formatYear,
		getYearLabels,
		BASE_HEIGHT,
		LEFT_PADDING,
		TOP_PADDING
	} from '#lib/utils/timeline';

	interface Props {
		continents: Continent[];
		onSelectEvent: (event: TimelineEvent) => void;
		selectedId?: string | null;
		/** When set, dots not in this set are dimmed (e.g. while search results are open). */
		highlightIds?: Set<string> | null;
	}

	let { continents, onSelectEvent, selectedId = null, highlightIds = null }: Props = $props();

	let containerWidth = $state(900);
	let hoveredEvent = $state<(TimelineEvent & { x: number; y: number }) | null>(null);
	let scrollAreaEl = $state<HTMLDivElement | null>(null);
	let zoomLevel = $state(1);

	const RIGHT_PADDING = 10;
	const MIN_ZOOM = 1;
	const MAX_ZOOM = 10;

	const totalHeight = $derived(BASE_HEIGHT * zoomLevel);
	const laneWidth = $derived((containerWidth - LEFT_PADDING - RIGHT_PADDING) / continents.length);
	// Bands at full activity nearly touch: 98% of the old 18% inter-band gap is removed.
	const BAND_FILL = 1 - 0.18 * 0.02;
	const maxHalfWidth = $derived((laneWidth / 2) * BAND_FILL);

	const DOT_RADIUS = 5;
	const DOT_SPACING = DOT_RADIUS * 2 + 2; // minimum center-to-center distance between dots
	const yearLabels = $derived(getYearLabels(totalHeight));

	type BandEvent = TimelineEvent & { x: number; y: number };
	type BandData = {
		continent: Continent;
		path: string;
		centerX: number;
		events: BandEvent[];
	};

	const bandData = $derived<BandData[]>(
		continents.map((continent, i) => {
			const centerX = LEFT_PADDING + laneWidth * (i + 0.5);
			return {
				continent,
				path: computeBandPath(continent.activityKeyframes, centerX, maxHalfWidth, totalHeight),
				centerX,
				events: spreadDots(continent.events, centerX, laneWidth / 2 - DOT_RADIUS - 2)
			};
		})
	);

	// Keep each dot at its exact year (y) and nudge it sideways only as far as needed to avoid
	// overlapping dots already placed, alternating right/left of the lane center. Dots are placed
	// in time order, so only recently placed dots within DOT_SPACING vertically can collide.
	function spreadDots(events: TimelineEvent[], centerX: number, maxOffset: number): BandEvent[] {
		const sorted = events
			.map((event) => ({ ...event, x: centerX, y: yearToPixel(event.year, totalHeight) }))
			.sort((a, b) => a.y - b.y);

		const placed: BandEvent[] = [];
		let windowStart = 0;
		const maxSteps = Math.max(0, Math.floor(maxOffset / (DOT_SPACING / 2)));

		for (const dot of sorted) {
			while (windowStart < placed.length && dot.y - placed[windowStart].y >= DOT_SPACING) {
				windowStart++;
			}
			const neighbors = placed.slice(windowStart);

			// Closest distance from candidate x to any neighbor; Infinity if none nearby.
			const clearance = (x: number) =>
				neighbors.reduce((min, n) => Math.min(min, Math.hypot(n.x - x, n.y - dot.y)), Infinity);

			// Candidates: 0, +h, -h, +2h, -2h, ... in half-spacing steps for a tight hex-like packing.
			let bestX = centerX;
			let bestClearance = -1;
			for (let step = 0; step <= maxSteps * 2; step++) {
				const k = Math.ceil(step / 2) * (step % 2 === 1 ? 1 : -1);
				const x = centerX + k * (DOT_SPACING / 2);
				const c = clearance(x);
				if (c >= DOT_SPACING) {
					bestX = x;
					bestClearance = c;
					break;
				}
				// If the lane is too crowded to avoid overlap, settle for the least-overlapping spot.
				if (c > bestClearance) {
					bestX = x;
					bestClearance = c;
				}
			}

			dot.x = bestX;
			placed.push(dot);
		}
		return placed;
	}

	const selectedDot = $derived.by(() => {
		if (!selectedId) return null;
		for (const band of bandData) {
			const dot = band.events.find((e) => e.id === selectedId);
			if (dot) return dot;
		}
		return null;
	});

	function isDimmed(id: string) {
		return !!highlightIds && !highlightIds.has(id) && id !== selectedId;
	}

	/** Scrolls the timeline so the event's dot sits in the vertical center. Keeps zoom as-is. */
	export function scrollToEvent(id: string) {
		const el = scrollAreaEl;
		if (!el) return;
		const year = continents.flatMap((c) => c.events).find((e) => e.id === id)?.year;
		if (year === undefined) return;
		const y = yearToPixel(year, totalHeight);
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		el.scrollTo({ top: y - el.clientHeight / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
	}

	// Zoom via pinch (trackpad) and ctrl/cmd+scroll
	function handleWheel(e: WheelEvent) {
		if (!e.ctrlKey && !e.metaKey) return;
		e.preventDefault();

		const el = scrollAreaEl;
		if (!el) return;

		const rect = el.getBoundingClientRect();
		const mouseY = e.clientY - rect.top;
		const scrollY = el.scrollTop;
		const focalFraction = (scrollY + mouseY) / totalHeight;

		const delta = -e.deltaY * 0.01;
		const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomLevel + delta));
		if (newZoom === zoomLevel) return;

		zoomLevel = newZoom;

		// Adjust scroll to keep focal point stable
		tick().then(() => {
			const newTotal = BASE_HEIGHT * zoomLevel;
			el.scrollTop = focalFraction * newTotal - mouseY;
		});
	}

	// Zoom via keyboard: ctrl/cmd + / -
	function handleKeydown(e: KeyboardEvent) {
		const isZoomIn = (e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+');
		const isZoomOut = (e.ctrlKey || e.metaKey) && e.key === '-';
		const isReset = (e.ctrlKey || e.metaKey) && e.key === '0';

		if (!isZoomIn && !isZoomOut && !isReset) return;
		e.preventDefault();

		const el = scrollAreaEl;
		const viewportMidY = el ? el.scrollTop + el.clientHeight / 2 : 0;
		const focalFraction = el ? viewportMidY / totalHeight : 0.5;

		if (isReset) {
			zoomLevel = 1;
		} else if (isZoomIn) {
			zoomLevel = Math.min(MAX_ZOOM, zoomLevel * 1.3);
		} else {
			zoomLevel = Math.max(MIN_ZOOM, zoomLevel / 1.3);
		}

		if (el) {
			tick().then(() => {
				const newTotal = BASE_HEIGHT * zoomLevel;
				el.scrollTop = focalFraction * newTotal - el.clientHeight / 2;
			});
		}
	}

	// Register wheel listener as non-passive so we can preventDefault
	onMount(() => {
		const el = scrollAreaEl;
		if (!el) return;
		el.addEventListener('wheel', handleWheel, { passive: false });
		return () => el.removeEventListener('wheel', handleWheel);
	});

	function handleEventClick(event: BandEvent) {
		onSelectEvent(event);
	}

	function handleEventEnter(event: BandEvent) {
		hoveredEvent = event;
	}

	function handleEventLeave() {
		hoveredEvent = null;
	}

	// Tooltip sizing based on text length
	function tooltipWidth(title: string): number {
		return Math.max(title.length * 6.8 + 20, 120);
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="viz-wrapper" bind:clientWidth={containerWidth}>
	<!-- Sticky continent labels -->
	<div class="continent-labels" style="padding-left: {LEFT_PADDING}px;">
		{#each bandData as band}
			<div class="continent-label" style="width: {laneWidth}px; color: {band.continent.color};">
				{band.continent.name}
			</div>
		{/each}
		{#if zoomLevel > 1.05}
			<div class="zoom-indicator">{Math.round(zoomLevel * 100)}%</div>
		{/if}
	</div>

	<!-- Scrollable SVG -->
	<div class="scroll-area" bind:this={scrollAreaEl}>
		<svg width={containerWidth} height={totalHeight}>
			<!-- Background -->
			<rect width={containerWidth} height={totalHeight} fill="#0d0d12" />

			<!-- Gridlines and year labels -->
			{#each yearLabels as label}
				<line
					x1={LEFT_PADDING}
					y1={label.y}
					x2={containerWidth - RIGHT_PADDING}
					y2={label.y}
					stroke="#2a2a3a"
					stroke-width="1"
				/>
				<text
					x={LEFT_PADDING - 6}
					y={label.y}
					text-anchor="end"
					dominant-baseline="middle"
					class="year-label"
				>
					{label.label}
				</text>
			{/each}

			<!-- Lane dividers -->
			{#each bandData as band, i}
				{#if i > 0}
					<line
						x1={band.centerX - laneWidth / 2}
						y1={TOP_PADDING}
						x2={band.centerX - laneWidth / 2}
						y2={totalHeight - 40}
						stroke="#1e1e2e"
						stroke-width="1"
					/>
				{/if}
			{/each}

			<!-- Continent bands -->
			{#each bandData as band}
				<path
					d={band.path}
					fill={band.continent.color}
					opacity="0.55"
					stroke={band.continent.color}
					stroke-width="0.5"
					stroke-opacity="0.3"
				/>
			{/each}

			<!-- Event dots -->
			{#each bandData as band}
				{#each band.events as event (event.id)}
					<circle
						cx={event.x}
						cy={event.y}
						r={hoveredEvent?.id === event.id ? DOT_RADIUS + 2 : DOT_RADIUS}
						fill={band.continent.color}
						stroke="#0d0d12"
						stroke-width="1.5"
						class="event-dot"
						class:dimmed={isDimmed(event.id)}
						role="button"
						tabindex="0"
						aria-label={event.title}
						onclick={() => handleEventClick(event)}
						onmouseenter={() => handleEventEnter(event)}
						onmouseleave={handleEventLeave}
						onkeydown={(e) => e.key === 'Enter' && handleEventClick(event)}
					/>
				{/each}
			{/each}

			<!-- Selected event ring -->
			{#if selectedDot}
				{#key selectedDot.id}
					<circle
						cx={selectedDot.x}
						cy={selectedDot.y}
						r={DOT_RADIUS + 4}
						fill="none"
						stroke="#e8e0d0"
						stroke-width="2"
						class="selected-ring"
						pointer-events="none"
					/>
				{/key}
			{/if}

			<!-- Hover tooltip -->
			{#if hoveredEvent}
				{@const tw = tooltipWidth(hoveredEvent.title)}
				{@const tx = Math.min(hoveredEvent.x + 14, containerWidth - tw - 10)}
				{@const ty = Math.max(hoveredEvent.y - 32, 10)}
				<rect
					x={tx - 8}
					y={ty - 16}
					width={tw + 12}
					height={42}
					rx="6"
					fill="#1a1a2e"
					stroke="#3a3a5a"
					stroke-width="1"
					opacity="0.95"
				/>
				<text x={tx} y={ty + 1} class="tooltip-title">{hoveredEvent.title}</text>
				<text x={tx} y={ty + 17} class="tooltip-year">
					{formatYear(hoveredEvent.year)}
				</text>
			{/if}
		</svg>
	</div>
</div>

<style>
	.viz-wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #0d0d12;
	}

	.continent-labels {
		display: flex;
		position: sticky;
		top: 0;
		z-index: 10;
		background: #0d0d12;
		border-bottom: 1px solid #2a2a3a;
		padding-top: 10px;
		padding-bottom: 10px;
		flex-shrink: 0;
	}

	.continent-label {
		text-align: center;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.9;
	}

	.zoom-indicator {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 10px;
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		color: #4a4a6a;
		background: #1a1a2e;
		padding: 2px 6px;
		border-radius: 3px;
		border: 1px solid #2a2a3a;
	}

	.scroll-area {
		overflow-y: auto;
		overflow-x: hidden;
		flex: 1;
	}

	.year-label {
		font-size: 10px;
		fill: #7a7a9a;
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		letter-spacing: -0.02em;
	}

	.event-dot {
		cursor: pointer;
		transition:
			r 0.1s ease,
			opacity 0.25s ease;
	}

	.event-dot.dimmed {
		opacity: 0.15;
	}

	.selected-ring {
		animation: ring-in 0.6s ease-out;
	}

	@keyframes ring-in {
		from {
			stroke-opacity: 0;
			stroke-width: 6;
		}
		to {
			stroke-opacity: 1;
			stroke-width: 2;
		}
	}

	.event-dot:focus {
		outline: none;
	}

	.tooltip-title {
		font-size: 12px;
		fill: #e8e0d0;
		font-weight: 600;
	}

	.tooltip-year {
		font-size: 10px;
		fill: #8a8aaa;
		font-family: 'JetBrains Mono', 'Courier New', monospace;
	}
</style>
