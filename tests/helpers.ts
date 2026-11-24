import { expect, type Page } from '@playwright/test';
import { lookup } from '../src/lib/data/lookup';
import { eventMeta } from '../src/lib/utils/meta';

/** A short trail through real data: A connects to B, and B connects on to C. */
export const A = 'europe-slave-trade-abolition'; // 1807
export const B = 'africa-atlantic-slave-trade'; // 1526, linked from A
export const C = 'na-haitian-revolution'; // 1791, linked from B

export function titleOf(id: string): string {
	const ref = lookup.byId.get(id);
	if (!ref) throw new Error(`Unknown event id in test: ${id}`);
	return ref.event.title;
}

export function metaOf(id: string) {
	const { event, continent } = lookup.byId.get(id)!;
	return eventMeta(event, continent);
}

export function nextInLane(id: string): string {
	const next = lookup.lanes.get(id)?.next;
	if (!next) throw new Error(`${id} has no later event`);
	return next.id;
}

export const dot = (page: Page, id: string) =>
	page.locator(`circle.event-dot[aria-label=${JSON.stringify(titleOf(id))}]`);

export const connectionLink = (page: Page, id: string) =>
	page.locator('a.connection', { hasText: titleOf(id) });

export const eventUrl = (id: string) => new RegExp(`/event/${id}$`);
export const homeUrl = /:\d+\/$/;

/** The open event's heading: the details panel on desktop, or the peek card / sheet on phones. */
export const openTitle = (page: Page) => page.locator('.event-title, .peek .title').first();

export async function expectOpen(page: Page, id: string) {
	await expect(page).toHaveURL(eventUrl(id));
	await expect(openTitle(page)).toHaveText(titleOf(id));
}

export async function expectClosed(page: Page) {
	await expect(page).toHaveURL(homeUrl);
	await expect(page.locator('.event-title, .peek .title')).toHaveCount(0);
}
