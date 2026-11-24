import { describe, expect, it } from 'vitest';
import { lookup } from '#lib/data/lookup';
import type { Continent, TimelineEvent } from '#lib/types';
import { eventMeta } from './meta';

const continent = { name: 'Europe' } as Continent;
const base: TimelineEvent = {
	id: 'europe-x',
	title: 'Something Happens',
	year: 1807,
	description: 'It happened.',
	significance: ''
};

describe('eventMeta', () => {
	it('puts the title and year in the page title', () => {
		expect(eventMeta(base, continent).title).toBe('Something Happens (1807) · Human History');
	});

	it('shows a year range and BCE dates', () => {
		const meta = eventMeta({ ...base, year: -2600, endYear: -2500 }, continent);
		expect(meta.title).toContain('(2,600 BCE–2,500 BCE)');
	});

	it('leads the description with continent and date', () => {
		expect(eventMeta(base, continent).description).toBe('Europe, 1807. It happened.');
	});

	it('produces a title and description for every real event', () => {
		for (const { event, continent } of lookup.byId.values()) {
			const meta = eventMeta(event, continent);
			expect(meta.title.length, event.id).toBeGreaterThan(SITE_SUFFIX_LENGTH);
			expect(meta.description.trim().length, event.id).toBeGreaterThan(20);
		}
	});
});

const SITE_SUFFIX_LENGTH = ' · Human History'.length;
