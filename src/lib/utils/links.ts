type ClickLike = Pick<MouseEvent, 'button' | 'metaKey' | 'ctrlKey' | 'shiftKey' | 'altKey' | 'defaultPrevented'>;

/**
 * True for an ordinary left click. Modified or middle clicks are left to the browser,
 * so a link can still open in a new tab or window.
 */
export function isPlainClick(e: ClickLike): boolean {
	return !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

/** onclick handler for an in-app link: a plain click runs `navigate` instead of a page load. */
export function interceptClick(navigate: () => void) {
	return (e: MouseEvent) => {
		if (!isPlainClick(e)) return;
		e.preventDefault();
		navigate();
	};
}
