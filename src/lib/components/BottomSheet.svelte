<script lang="ts" module>
	export type SheetSnap = 'peek' | 'half' | 'full';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		snap: SheetSnap;
		/** Pixel height for each snap point. */
		heights: Record<SheetSnap, number>;
		onSnapChange: (snap: SheetSnap) => void;
		onClose: () => void;
		/** Draggable top area: the whole peek card, or the bar above the content when taller. */
		header: Snippet;
		/** Scrollable body shown at half/full height. */
		children?: Snippet;
	}

	let { snap, heights, onSnapChange, onClose, header, children }: Props = $props();

	const DRAG_THRESHOLD = 6;
	const ORDER: SheetSnap[] = ['peek', 'half', 'full'];

	// Live height while dragging; null when resting at a snap point.
	let dragHeight = $state<number | null>(null);
	let drag: {
		pointerId: number;
		startY: number;
		startHeight: number;
		lastY: number;
		lastT: number;
		velocity: number; // px/ms, positive = upward
		active: boolean;
	} | null = null;

	const height = $derived(dragHeight ?? heights[snap]);

	function handlePointerDown(e: PointerEvent) {
		if (e.button !== 0) return;
		drag = {
			pointerId: e.pointerId,
			startY: e.clientY,
			startHeight: heights[snap],
			lastY: e.clientY,
			lastT: e.timeStamp,
			velocity: 0,
			active: false
		};
	}

	function handlePointerMove(e: PointerEvent) {
		if (!drag || e.pointerId !== drag.pointerId) return;
		const dy = e.clientY - drag.startY;
		if (!drag.active) {
			if (Math.abs(dy) < DRAG_THRESHOLD) return;
			// Only capture once it's clearly a drag, so plain taps still click buttons inside.
			drag.active = true;
			(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		}
		const dt = Math.max(1, e.timeStamp - drag.lastT);
		drag.velocity = 0.8 * ((drag.lastY - e.clientY) / dt) + 0.2 * drag.velocity;
		drag.lastY = e.clientY;
		drag.lastT = e.timeStamp;
		dragHeight = Math.max(0, Math.min(heights.full, drag.startHeight - dy));
	}

	function handlePointerUp(e: PointerEvent) {
		if (!drag || e.pointerId !== drag.pointerId) return;
		const wasActive = drag.active;
		const velocity = drag.velocity;
		drag = null;
		if (!wasActive || dragHeight === null) return;

		// Project a little into the future so a flick carries to the next snap point.
		const projected = dragHeight + velocity * 180;
		dragHeight = null;
		if (projected < heights.peek * 0.6) {
			onClose();
			return;
		}
		let best: SheetSnap = 'peek';
		for (const s of ORDER) {
			if (Math.abs(heights[s] - projected) < Math.abs(heights[best] - projected)) best = s;
		}
		if (best !== snap) onSnapChange(best);
	}
</script>

<section
	class="sheet"
	class:dragging={dragHeight !== null}
	class:resting-peek={snap === 'peek'}
	style="height: {height}px;"
	aria-label="Event details"
>
	<div
		class="grab"
		onpointerdown={handlePointerDown}
		onpointermove={handlePointerMove}
		onpointerup={handlePointerUp}
		onpointercancel={handlePointerUp}
	>
		<div class="handle" aria-hidden="true"></div>
		{@render header()}
	</div>
	{#if snap !== 'peek' && children}
		<div class="body">
			{@render children()}
		</div>
	{/if}
</section>

<style>
	.sheet {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		background: #12121c;
		border-top: 1px solid #2a2a3a;
		border-radius: 14px 14px 0 0;
		box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.45);
		overflow: hidden;
		transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.sheet.dragging {
		transition: none;
	}

	.grab {
		flex-shrink: 0;
		touch-action: none;
		user-select: none;
		-webkit-user-select: none;
	}

	.sheet.resting-peek .grab {
		flex: 1;
	}

	.handle {
		width: 36px;
		height: 4px;
		border-radius: 2px;
		background: #3a3a5a;
		margin: 8px auto 4px;
	}

	.body {
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
	}

	@media (prefers-reduced-motion: reduce) {
		.sheet {
			transition: none;
		}
	}
</style>
