// Behaviour shared by the desktop and phone layouts.
import { expect, test } from '@playwright/test';
import { A, dot, expectClosed, metaOf, titleOf } from './helpers';

test('an event page is server-rendered with its own title and link-preview tags', async ({ request }) => {
	const res = await request.get(`/event/${A}`);
	expect(res.status()).toBe(200);
	const html = await res.text();
	const meta = metaOf(A);
	expect(html).toContain(`<title>${meta.title}</title>`);
	expect(html).toContain(`property="og:title" content="${meta.title}"`);
	expect(html).toContain(`property="og:description" content="${meta.description}"`);
	expect(html).toMatch(new RegExp(`property="og:url" content="https?://[^"]+/event/${A}"`));
	expect(html).toMatch(new RegExp(`rel="canonical" href="https?://[^"]+/event/${A}"`));
	// The details are in the HTML itself, before any JavaScript runs.
	expect(html).toContain(titleOf(A));
});

test('the home page keeps its own title', async ({ page }) => {
	await page.goto('/', { waitUntil: 'networkidle' });
	await expect(page).toHaveTitle('Human History Timeline');
});

test('a shared link opens the event details with its dot scrolled into view', async ({ page }) => {
	await page.goto(`/event/${A}`, { waitUntil: 'networkidle' });
	await expect(page).toHaveTitle(metaOf(A).title);
	// On phones too: the sheet opens far enough to read, not just the peek card.
	await expect(page.locator('.event-title')).toHaveText(titleOf(A));
	await expect(page.locator('.selected-ring')).toHaveCount(1);
	await expect(dot(page, A)).toBeInViewport();
});

test('an unknown event id falls back to the plain timeline', async ({ page, request }) => {
	const res = await request.get('/event/no-such-event', { maxRedirects: 0 });
	expect(res.status()).toBe(307);
	// Some hosts make the location absolute.
	expect(res.headers()['location']).toMatch(/^(https?:\/\/[^/]+)?\/$/);

	await page.goto('/event/no-such-event', { waitUntil: 'networkidle' });
	await expectClosed(page);
	await expect(page.locator('circle.event-dot').first()).toBeVisible();
});

test('the page title follows the open event', async ({ page }) => {
	await page.goto(`/event/${A}`, { waitUntil: 'networkidle' });
	await page.locator('a.connection').first().click();
	await expect(page).not.toHaveTitle(metaOf(A).title);
	await expect(page).toHaveTitle(/ · Human History$/);
	await page.goBack();
	await expect(page).toHaveTitle(metaOf(A).title);
});
