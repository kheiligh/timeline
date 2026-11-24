import { expect, test } from '@playwright/test';
import {
	A,
	B,
	C,
	connectionLink,
	dot,
	eventUrl,
	expectClosed,
	expectOpen,
	homeUrl,
	titleOf
} from './helpers';

test.skip(({ isMobile }) => isMobile, 'desktop layout');

const close = (page: import('@playwright/test').Page) =>
	page.getByRole('button', { name: 'Close', exact: true }).click();

test('clicking a dot puts the event in the URL; Back closes it, Forward re-opens it', async ({ page }) => {
	await page.goto('/');
	await dot(page, A).click();
	await expectOpen(page, A);

	await page.goBack();
	await expectClosed(page);

	await page.goForward();
	await expectOpen(page, A);
});

test('connections are real links, and Back retraces the trail', async ({ page }) => {
	await page.goto('/');
	await dot(page, A).click();
	await expect(connectionLink(page, B)).toHaveAttribute('href', `/event/${B}`);

	await connectionLink(page, B).click();
	await expectOpen(page, B);
	await connectionLink(page, C).click();
	await expectOpen(page, C);

	await page.goBack();
	await expectOpen(page, B);
	await page.goBack();
	await expectOpen(page, A);
	await page.goBack();
	await expectClosed(page);
});

test('clicking another dot while one is open replaces it rather than adding to history', async ({
	page
}) => {
	await page.goto('/');
	await dot(page, A).click();
	await expectOpen(page, A);
	await dot(page, B).click();
	await expectOpen(page, B);

	await page.goBack();
	await expectClosed(page);
});

test('Close returns to before the panel opened, and Forward picks the trail back up', async ({
	page
}) => {
	await page.goto('/');
	await dot(page, A).click();
	await connectionLink(page, B).click();
	await expectOpen(page, B);

	await close(page);
	await expectClosed(page);

	await page.goForward();
	await expectOpen(page, A);
});

test('Escape closes the panel', async ({ page }) => {
	await page.goto('/');
	await dot(page, A).click();
	await expectOpen(page, A);
	await page.keyboard.press('Escape');
	await expectClosed(page);
});

test('closing a trail that started on a shared link lands on the bare timeline', async ({ page }) => {
	await page.goto(`/event/${A}`);
	await connectionLink(page, B).click();
	await expectOpen(page, B);

	await close(page);
	await expectClosed(page);

	// Back still reaches the shared event.
	await page.goBack();
	await expectOpen(page, A);
});

test('after a reload, Close still steps back to the timeline instead of adding an entry', async ({
	page
}) => {
	await page.goto('/');
	await dot(page, A).click();
	await expectOpen(page, A);

	await page.reload();
	await expectOpen(page, A);

	await close(page);
	await expectClosed(page);
	await page.goForward();
	await expectOpen(page, A);
});

test('Ctrl/Cmd-click on a connection opens it in a new tab', async ({ page, context }) => {
	await page.goto(`/event/${A}`);
	const [tab] = await Promise.all([
		context.waitForEvent('page'),
		connectionLink(page, B).click({ modifiers: ['ControlOrMeta'] })
	]);
	await tab.waitForLoadState();
	await expect(tab).toHaveURL(eventUrl(B));
	await expect(tab.locator('.event-title')).toHaveText(titleOf(B));
	// The original tab hasn't moved.
	await expectOpen(page, A);
});

test('"Copy link" copies the event\'s address', async ({ page, context, baseURL }) => {
	await context.grantPermissions(['clipboard-read', 'clipboard-write']);
	await page.goto(`/event/${A}`);
	await page.getByRole('button', { name: 'Copy link' }).click();
	await expect(page.getByRole('button', { name: 'Link copied' })).toBeVisible();
	expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(`${baseURL}/event/${A}`);

	// A different event starts with a fresh button.
	await connectionLink(page, B).click();
	await expect(page.getByRole('button', { name: 'Copy link' })).toBeVisible();
});

test('search results: open a result, go back to the list, then close', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Search events' }).click();
	await page.getByRole('combobox', { name: 'Search events' }).fill('abolition');
	await page.keyboard.press('Enter');

	const results = page.locator('a.hit');
	await expect(results.first()).toBeVisible();
	await expect(page).toHaveURL(homeUrl);

	const firstHref = await results.first().getAttribute('href');
	expect(firstHref).toMatch(/^\/event\//);
	await results.first().click();
	await expect(page).toHaveURL(new RegExp(`${firstHref}$`));
	await expect(page.locator('.event-title')).toBeVisible();

	// Browser Back returns to the list…
	await page.goBack();
	await expect(page).toHaveURL(homeUrl);
	await expect(results.first()).toBeVisible();

	// …and so does the in-panel button.
	await results.first().click();
	await page.getByRole('button', { name: /Back to results/ }).click();
	await expect(page).toHaveURL(homeUrl);
	await expect(results.first()).toBeVisible();

	await close(page);
	await expect(results).toHaveCount(0);
	await expectClosed(page);
});
