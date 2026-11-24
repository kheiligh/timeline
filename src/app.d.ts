// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { PanelHistoryState } from '#lib/utils/history';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		/** Panel state carried in browser history; the open event itself is in the URL. */
		interface PageState extends PanelHistoryState {}
		// interface Platform {}
	}
}

export {};
