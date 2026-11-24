<script lang="ts">
	import { flushSync, onMount } from 'svelte';
	import type { Continent, TimelineEvent } from '#lib/types';
	import {
		computeBandPath,
		yearToPixel,
		formatYear,
		getYearLabels,
		BASE_HEIGHT,
		LEFT_PADDING,
		LEFT_PADDING_COMPACT,
		TOP_PADDING
	} from '#lib/utils/timeline';

	interface Props {
		continents: Continent[];
		onSelectEvent: (event: TimelineEvent) => void;
		selectedId?: string | null;
		/** When set, dots not in this set are dimmed (e.g. while search results are open). */
		highlightIds?: Set<string> | null;
		/** Phone layout: narrow year axis and short continent labels. */
		compact?: boolean;
		/** Touch input: nearest-dot tap targets, pinch zoom, zoom buttons, no hover tooltip. */
		touch?: boolean;
		/** Touch only: a tap that wasn't near any dot. */
		onTapEmpty?: () => void;
	}

	let {
		continents,
		onSelectEvent,
		selectedId = null,
		highlightIds = null,
		compact = false,
		touch = false,
		onTapEmpty
	}: Props = $props();

	let containerWidth = $state(900);
	let hoveredEvent = $state<(TimelineEvent & { x: number; y: number }) | null>(null);
	let scrollAreaEl = $state<HTMLDivElement | null>(null);
	let zoomLevel = $state(1);

	const RIGHT_PADDING = 10;
	const MIN_ZOOM = 1;
	const MAX_ZOOM = 10;

	const totalHeight = $derived(BASE_HEIGHT * zoomLevel);
	const leftPadding = $derived(compact ? LEFT_PADDING_COMPACT : LEFT_PADDING);
	const laneWidth = $derived((containerWidth - leftPadding - RIGHT_PADDING) / continents.length);
	// Bands at full activity nearly touch: 98% of the old 18% inter-band gap is removed.
	const BAND_FILL = 1 - 0.18 * 0.02;
	const maxHalfWidth = $derived((laneWidth / 2) * BAND_FILL);

	const DOT_RADIUS = 5;
	const DOT_SPACING = DOT_RADIUS * 2 + 2; // minimum center-to-center distance between dots
	const yearLabels = $derived(getYearLabels(totalHeight, compact));

	type BandEvent = TimelineEvent & { x: number; y: number };
	type BandData = {
		continent: Continent;
		path: string;
		centerX: number;
		events: BandEvent[];
	};

	const bandData = $derived<BandData[]>(
		continents.map((continent, i) => {
			const centerX = leftPadding + laneWidth * (i + 0.5);
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

	/** Scrolls only if the event's dot is outside the visible area (with a small margin). */
	export function ensureVisible(id: string) {
		const el = scrollAreaEl;
		if (!el || el.clientHeight < 80) return;
		const year = continents.flatMap((c) => c.events).find((e) => e.id === id)?.year;
		if (year === undefined) return;
		const y = yearToPixel(year, totalHeight);
		const margin = 40;
		if (y >= el.scrollTop + margin && y <= el.scrollTop + el.clientHeight - margin) return;
		scrollToEvent(id);
	}

	/**
	 * Sets the zoom and scrolls so the point that was at `fraction` of the timeline's height
	 * ends up `anchorY` px below the top of the scroll area.
	 */
	function applyZoom(newZoom: number, fraction: number, anchorY: number) {
		const el = scrollAreaEl;
		zoomLevel = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZoom));
		if (!el) return;
		flushSync();
		el.scrollTop = fraction * BASE_HEIGHT * zoomLevel - anchorY;
	}

	/** Zooms while keeping whatever is `anchorY` px below the scroll area's top in place. */
	function zoomAround(newZoom: number, anchorY: number) {
		const el = scrollAreaEl;
		const fraction = el ? (el.scrollTop + anchorY) / totalHeight : 0.5;
		applyZoom(newZoom, fraction, anchorY);
	}

	function zoomAtCenter(newZoom: number) {
		zoomAround(newZoom, (scrollAreaEl?.clientHeight ?? 0) / 2);
	}

	// Zoom via pinch (trackpad) and ctrl/cmd+scroll
	function handleWheel(e: WheelEvent) {
		if (!e.ctrlKey && !e.metaKey) return;
		e.preventDefault();
		const el = scrollAreaEl;
		if (!el) return;
		const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomLevel - e.deltaY * 0.01));
		if (newZoom === zoomLevel) return;
		zoomAround(newZoom, e.clientY - el.getBoundingClientRect().top);
	}

	// Zoom via keyboard: ctrl/cmd + / -
	function handleKeydown(e: KeyboardEvent) {
		const isZoomIn = (e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+');
		const isZoomOut = (e.ctrlKey || e.metaKey) && e.key === '-';
		const isReset = (e.ctrlKey || e.metaKey) && e.key === '0';

		if (!isZoomIn && !isZoomOut && !isReset) return;
		e.preventDefault();
		zoomAtCenter(isReset ? 1 : isZoomIn ? zoomLevel * 1.3 : zoomLevel / 1.3);
	}

	// Two-finger pinch on touch screens: zooms the time axis only. The year under the fingers'
	// midpoint stays under it, so moving both fingers also scrolls.
	let pinch: { startDist: number; startZoom: number; fraction: number } | null = null;

	function touchGeometry(e: TouchEvent) {
		const [a, b] = [e.touches[0], e.touches[1]];
		const top = scrollAreaEl!.getBoundingClientRect().top;
		return {
			dist: Math.max(1, Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)),
			midY: (a.clientY + b.clientY) / 2 - top
		};
	}

	function handleTouchStart(e: TouchEvent) {
		if (e.touches.length !== 2 || !scrollAreaEl) return;
		const { dist, midY } = touchGeometry(e);
		pinch = {
			startDist: dist,
			startZoom: zoomLevel,
			fraction: (scrollAreaEl.scrollTop + midY) / totalHeight
		};
	}

	function handleTouchMove(e: TouchEvent) {
		if (!pinch || e.touches.length !== 2) return;
		e.preventDefault();
		const { dist, midY } = touchGeometry(e);
		applyZoom(pinch.startZoom * (dist / pinch.startDist), pinch.fraction, midY);
	}

	function handleTouchEnd(e: TouchEvent) {
		if (e.touches.length < 2) pinch = null;
	}

	// Register wheel/touch listeners as non-passive so they can preventDefault
	onMount(() => {
		const el = scrollAreaEl;
		if (!el) return;
		const preventGesture = (e: Event) => e.preventDefault(); // iOS Safari page pinch-zoom
		el.addEventListener('wheel', handleWheel, { passive: false });
		el.addEventListener('touchstart', handleTouchStart, { passive: true });
		el.addEventListener('touchmove', handleTouchMove, { passive: false });
		el.addEventListener('touchend', handleTouchEnd);
		el.addEventListener('touchcancel', handleTouchEnd);
		el.addEventListener('gesturestart', preventGesture);
		return () => {
			el.removeEventListener('wheel', handleWheel);
			el.removeEventListener('touchstart', handleTouchStart);
			el.removeEventListener('touchmove', handleTouchMove);
			el.removeEventListener('touchend', handleTouchEnd);
			el.removeEventListener('touchcancel', handleTouchEnd);
			el.removeEventListener('gesturestart', preventGesture);
		};
	});

	const TAP_RADIUS = 22;

	// On touch screens a tap picks the nearest dot within TAP_RADIUS, since 10px dots are far
	// smaller than a fingertip. Mouse clicks still go to the dot directly.
	function handleSvgClick(e: MouseEvent) {
		if (!touch) return;
		const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		let best: BandEvent | null = null;
		let bestDist = TAP_RADIUS;
		for (const band of bandData) {
			for (const dot of band.events) {
				if (Math.abs(dot.y - y) > TAP_RADIUS) continue;
				const d = Math.hypot(dot.x - x, dot.y - y);
				if (d <= bestDist) {
					best = dot;
					bestDist = d;
				}
			}
		}
		if (best) onSelectEvent(best);
		else onTapEmpty?.();
	}

	function handleEventClick(event: BandEvent) {
		onSelectEvent(event);
	}

	function handleEventEnter(event: BandEvent) {
		if (touch) return; // taps also fire emulated mouseenter
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
	<div class="continent-labels" class:compact style="padding-left: {leftPadding}px;">
		{#each bandData as band}
			<div class="continent-label" style="width: {laneWidth}px; color: {band.continent.color};">
				{compact ? band.continent.shortName : band.continent.name}
			</div>
		{/each}
		{#if zoomLevel > 1.05 && !compact}
			<div class="zoom-indicator">{Math.round(zoomLevel * 100)}%</div>
		{/if}
	</div>

	{#if touch}
		<div class="zoom-controls">
			<button
				type="button"
				aria-label="Zoom in"
				disabled={zoomLevel >= MAX_ZOOM}
				onclick={() => zoomAtCenter(zoomLevel * 1.5)}>+</button
			>
			<button
				type="button"
				aria-label="Zoom out"
				disabled={zoomLevel <= MIN_ZOOM}
				onclick={() => zoomAtCenter(zoomLevel / 1.5)}>&minus;</button
			>
		</div>
	{/if}

	<!-- Scrollable SVG -->
	<div class="scroll-area" class:touch bind:this={scrollAreaEl}>
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<svg width={containerWidth} height={totalHeight} onclick={handleSvgClick}>
			<!-- Background -->
			<rect width={containerWidth} height={totalHeight} fill="#0d0d12" />

			<!-- Gridlines and year labels -->
			{#each yearLabels as label}
				<line
					x1={leftPadding}
					y1={label.y}
					x2={containerWidth - RIGHT_PADDING}
					y2={label.y}
					stroke="#2a2a3a"
					stroke-width="1"
				/>
				<text
					x={leftPadding - (compact ? 4 : 6)}
					y={label.y}
					text-anchor="end"
					dominant-baseline="middle"
					class="year-label"
					class:compact
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
						onclick={() => !touch && handleEventClick(event)}
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
		position: relative;
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
		font-family: var(--font-display);
		text-align: center;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.9;
	}

	.continent-labels.compact .continent-label {
		font-size: 9px;
		letter-spacing: 0.02em;
		white-space: nowrap;
		overflow: hidden;
	}

	.zoom-indicator {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 10px;
		font-family: 'Cousine', 'Courier New', monospace;
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

	/* One finger scrolls natively; pinch is handled in JS instead of zooming the page. */
	.scroll-area.touch {
		touch-action: pan-y;
		-webkit-tap-highlight-color: transparent;
	}

	.zoom-controls {
		position: absolute;
		right: 10px;
		bottom: 12px;
		z-index: 5;
		display: flex;
		flex-direction: column;
		border: 1px solid #2a2a3a;
		border-radius: 10px;
		overflow: hidden;
		background: rgba(20, 20, 31, 0.92);
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
	}

	.zoom-controls button {
		width: 44px;
		height: 44px;
		background: none;
		border: none;
		color: #c0b8b0;
		font-size: 22px;
		line-height: 1;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.zoom-controls button + button {
		border-top: 1px solid #2a2a3a;
	}

	.zoom-controls button:active:not(:disabled) {
		background: #1e1e32;
	}

	.zoom-controls button:disabled {
		color: #3a3a5a;
	}

	.year-label {
		font-size: 10px;
		fill: #7a7a9a;
		font-family: 'Cousine', 'Courier New', monospace;
		letter-spacing: -0.02em;
	}

	.year-label.compact {
		font-size: 8.5px;
		letter-spacing: -0.04em;
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
		font-family: var(--font-display);
		font-size: 12px;
		fill: #e8e0d0;
		font-weight: 600;
	}

	.tooltip-year {
		font-size: 10px;
		fill: #8a8aaa;
		font-family: 'Cousine', 'Courier New', monospace;
	}
</style>
