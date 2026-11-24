import { expect, test, type Page } from '@playwright/test';
import {
	A,
	B,
	connectionLink,
	dot,
	expectClosed,
	expectOpen,
	nextInLane
} from './helpers';

test.skip(({ isMobile }) => !isMobile, 'phone layout');

const sheet = (page: Page) => page.getByRole('region', { name: 'Event details' });

async function sheetHeight(page: Page): Promise<number> {
	const box = await sheet(page).boundingBox();
	return box?.height ?? 0;
}

/** Height of the area under the header, i.e. a full-height sheet. */
async function mainHeight(page: Page): Promise<number> {
	return page.locator('main').evaluate((el) => el.clientHeight);
}

/** Waits for the sheet to come to rest at a snap height (the layout's 116px / 55% / 100%). */
async function expectSnap(page: Page, snap: 'peek' | 'half' | 'full') {
	const main = await mainHeight(page);
	const target = { peek: 116, half: Math.max(196, Math.round(main * 0.55)), full: main }[snap];
	await expect.poll(() => sheetHeight(page)).toBeCloseTo(target, 0);
}

/**
 * Drags the sheet's handle so its top edge ends near `toY` (in viewport pixels), slowly.
 * Small steps keep the pointer on the handle until the sheet claims the drag: a mouse, unlike a
 * finger, isn't captured by the element it pressed on.
 */
async function dragSheetTo(page: Page, toY: number) {
	const box = (await page.locator('.sheet .grab').boundingBox())!;
	const x = box.x + box.width / 2;
	const y = box.y + 12;
	await page.mouse.move(x, y);
	await page.mouse.down();
	await page.mouse.move(x, toY, { steps: Math.ceil(Math.abs(toY - y) / 3) });
	await page.waitForTimeout(150);
	await page.mouse.up();
}

async function openToHalf(page: Page, id: string) {
	await page.goto('/', { waitUntil: 'networkidle' });
	await dot(page, id).tap();
	await expectOpen(page, id);
	await expectSnap(page, 'peek');
	await page.locator('.peek .summary').click();
	await expectSnap(page, 'half');
}

async function expandToFull(page: Page) {
	const top = (await page.locator('main').boundingBox())!.y;
	await dragSheetTo(page, top);
	await expectSnap(page, 'full');
}

test('tapping a dot shows the peek card and puts the event in the URL; Back closes it', async ({
	page
}) => {
	await page.goto('/', { waitUntil: 'networkidle' });
	await dot(page, A).tap();
	await expectOpen(page, A);
	await expectSnap(page, 'peek');

	await page.goBack();
	await expectClosed(page);
	await expect(sheet(page)).toHaveCount(0);
});

test('stepping ‹ › on the peek card replaces the entry', async ({ page }) => {
	const next = nextInLane(A);
	await page.goto('/', { waitUntil: 'networkidle' });
	await dot(page, A).tap();
	await expectOpen(page, A);
	await page.getByRole('button', { name: /^Next:/ }).click();
	await expectOpen(page, next);

	await page.goBack();
	await expectClosed(page);
});

test('a full-height sheet steps down to half on Back, then closes', async ({ page }) => {
	await openToHalf(page, A);
	await expandToFull(page);

	await page.goBack();
	await expectOpen(page, A);
	await expectSnap(page, 'half');

	await page.goBack();
	await expectClosed(page);
});

test('following a connection keeps the sheet full, and Back retraces the trail', async ({ page }) => {
	await openToHalf(page, A);
	await expandToFull(page);

	await connectionLink(page, B).click();
	await expectOpen(page, B);
	await expectSnap(page, 'full');

	await page.goBack();
	await expectOpen(page, A);
	await expectSnap(page, 'full');

	await page.goBack();
	await expectSnap(page, 'half');
	await page.goBack();
	await expectClosed(page);
});

test('dragging a full sheet back down removes its history entry', async ({ page }) => {
	await openToHalf(page, A);
	await expandToFull(page);

	const viewport = page.viewportSize()!;
	await dragSheetTo(page, viewport.height * 0.45);
	await expectSnap(page, 'half');

	// No leftover "full" entry: one Back closes the sheet.
	await page.goBack();
	await expectClosed(page);
});

test('closing from the sheet returns to the timeline', async ({ page }) => {
	await openToHalf(page, A);
	await connectionLink(page, B).click();
	await expectOpen(page, B);

	await page.getByRole('button', { name: 'Close', exact: true }).click();
	await expectClosed(page);
});
