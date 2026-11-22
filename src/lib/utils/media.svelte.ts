import { MediaQuery } from 'svelte/reactivity';

/** Layout switch: below this width the app uses the phone layout (bottom sheet, compact axis). */
export const narrowScreen = new MediaQuery('max-width: 767px', false);

/** Interaction switch: primary input is a finger (tap-to-peek, nearest-dot hit testing, pinch zoom). */
export const coarsePointer = new MediaQuery('pointer: coarse', false);
