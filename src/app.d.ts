// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			/** Set on the history entry pushed while the phone bottom sheet is open. */
			sheet?: boolean;
		}
		// interface Platform {}
	}
}

export {};
