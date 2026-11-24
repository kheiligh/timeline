import type { Continent, TimelineEvent } from '#lib/types';
import { formatYear } from './timeline';

export const SITE_NAME = 'Human History';

export interface PageMeta {
	title: string;
	description: string;
}

export const homeMeta: PageMeta = {
	title: 'Human History Timeline',
	description:
		'Three million years of human history across six continents, from the first stone tools to the present day.'
};

/** Title and description for an event page, also used for link previews when it is shared. */
export function eventMeta(event: TimelineEvent, continent: Continent): PageMeta {
	const when = event.endYear
		? `${formatYear(event.year)}–${formatYear(event.endYear)}`
		: formatYear(event.year);
	return {
		title: `${event.title} (${when}) · ${SITE_NAME}`,
		description: `${continent.name}, ${when}. ${event.description}`
	};
}
