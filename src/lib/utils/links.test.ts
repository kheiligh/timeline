import { describe, expect, it, vi } from 'vitest';
import { interceptClick, isPlainClick } from './links';

const click = (over: Partial<MouseEvent> = {}) =>
	({
		button: 0,
		metaKey: false,
		ctrlKey: false,
		shiftKey: false,
		altKey: false,
		defaultPrevented: false,
		preventDefault: vi.fn(),
		...over
	}) as unknown as MouseEvent;

describe('isPlainClick', () => {
	it('accepts an ordinary left click', () => {
		expect(isPlainClick(click())).toBe(true);
	});

	it('leaves new-tab and new-window clicks to the browser', () => {
		for (const over of [
			{ button: 1 },
			{ metaKey: true },
			{ ctrlKey: true },
			{ shiftKey: true },
			{ altKey: true },
			{ defaultPrevented: true }
		]) {
			expect(isPlainClick(click(over)), JSON.stringify(over)).toBe(false);
		}
	});
});

describe('interceptClick', () => {
	it('navigates in-app and stops the page load on a plain click', () => {
		const navigate = vi.fn();
		const e = click();
		interceptClick(navigate)(e);
		expect(navigate).toHaveBeenCalledOnce();
		expect(e.preventDefault).toHaveBeenCalledOnce();
	});

	it('does nothing on a modified click', () => {
		const navigate = vi.fn();
		const e = click({ metaKey: true });
		interceptClick(navigate)(e);
		expect(navigate).not.toHaveBeenCalled();
		expect(e.preventDefault).not.toHaveBeenCalled();
	});
});
