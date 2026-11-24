import type { Continent, TimelineEvent } from '#lib/types';
import { africaEvents } from './events/africa';
import { asiaEvents } from './events/asia';
import { europeEvents } from './events/europe';
import { northAmericaEvents } from './events/north-america';
import { southAmericaEvents } from './events/south-america';
import { oceaniaEvents } from './events/oceania';

// Event files are kept roughly chronological, but sort here so render order never depends on it.
const byYear = (events: TimelineEvent[]) => [...events].sort((a, b) => a.year - b.year);

export const continents: Continent[] = [
	{
		id: 'africa',
		name: 'Africa',
		shortName: 'Africa',
		color: '#F0B465',
		activityKeyframes: [
			{ year: -3_000_000, score: 90 },
			{ year: -2_000_000, score: 85 },
			{ year: -500_000, score: 78 },
			{ year: -300_000, score: 88 },
			{ year: -100_000, score: 82 },
			{ year: -70_000, score: 68 },
			{ year: -40_000, score: 65 },
			{ year: -10_000, score: 60 },
			{ year: -5_000, score: 72 },
			{ year: -3_100, score: 85 },
			{ year: -1_000, score: 70 },
			{ year: -500, score: 68 },
			{ year: 0, score: 65 },
			{ year: 500, score: 52 },
			{ year: 700, score: 62 },
			{ year: 1000, score: 70 },
			{ year: 1300, score: 72 },
			{ year: 1500, score: 55 },
			{ year: 1700, score: 38 },
			{ year: 1900, score: 32 },
			{ year: 1960, score: 55 },
			{ year: 2026, score: 65 }
		],
		events: byYear(africaEvents)
	},
	{
		id: 'asia',
		name: 'Asia',
		shortName: 'Asia',
		color: '#EF8D83',
		activityKeyframes: [
			{ year: -3_000_000, score: 15 },
			{ year: -2_000_000, score: 30 },
			{ year: -500_000, score: 42 },
			{ year: -100_000, score: 48 },
			{ year: -50_000, score: 55 },
			{ year: -10_000, score: 65 },
			{ year: -5_000, score: 78 },
			{ year: -3_000, score: 85 },
			{ year: -1_000, score: 80 },
			{ year: -500, score: 90 },
			{ year: 0, score: 85 },
			{ year: 300, score: 68 },
			{ year: 600, score: 85 },
			{ year: 900, score: 82 },
			{ year: 1200, score: 75 },
			{ year: 1400, score: 70 },
			{ year: 1600, score: 75 },
			{ year: 1800, score: 62 },
			{ year: 1900, score: 58 },
			{ year: 1945, score: 52 },
			{ year: 2000, score: 85 },
			{ year: 2026, score: 92 }
		],
		events: byYear(asiaEvents)
	},
	{
		id: 'europe',
		name: 'Europe',
		shortName: 'Europe',
		color: '#86A9EE',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -1_000_000, score: 12 },
			{ year: -500_000, score: 22 },
			{ year: -40_000, score: 50 },
			{ year: -10_000, score: 52 },
			{ year: -5_000, score: 58 },
			{ year: -3_000, score: 65 },
			{ year: -1_000, score: 70 },
			{ year: -500, score: 85 },
			{ year: 0, score: 90 },
			{ year: 400, score: 52 },
			{ year: 800, score: 58 },
			{ year: 1200, score: 68 },
			{ year: 1300, score: 58 },
			{ year: 1450, score: 75 },
			{ year: 1600, score: 85 },
			{ year: 1800, score: 90 },
			{ year: 1900, score: 95 },
			{ year: 1945, score: 48 },
			{ year: 1960, score: 65 },
			{ year: 2026, score: 68 }
		],
		events: byYear(europeEvents)
	},
	{
		id: 'oceania',
		name: 'Oceania',
		shortName: 'Oceania',
		color: '#C690E6',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -65_000, score: 32 },
			{ year: -50_000, score: 42 },
			{ year: -40_000, score: 48 },
			{ year: -10_000, score: 45 },
			{ year: -3_500, score: 50 },
			{ year: -1_500, score: 55 },
			{ year: 1000, score: 52 },
			{ year: 1300, score: 50 },
			{ year: 1700, score: 28 },
			{ year: 1788, score: 22 },
			{ year: 1850, score: 32 },
			{ year: 1900, score: 38 },
			{ year: 1960, score: 48 },
			{ year: 2026, score: 55 }
		],
		events: byYear(oceaniaEvents)
	},
	{
		id: 'north-america',
		name: 'N. America',
		shortName: 'N.Am',
		color: '#76D395',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -15_000, score: 22 },
			{ year: -10_000, score: 35 },
			{ year: -5_000, score: 38 },
			{ year: -1_000, score: 48 },
			{ year: 1000, score: 52 },
			{ year: 1200, score: 55 },
			{ year: 1492, score: 48 },
			{ year: 1600, score: 42 },
			{ year: 1700, score: 50 },
			{ year: 1800, score: 65 },
			{ year: 1850, score: 72 },
			{ year: 1900, score: 85 },
			{ year: 1945, score: 95 },
			{ year: 2000, score: 88 },
			{ year: 2026, score: 82 }
		],
		events: byYear(northAmericaEvents)
	},
	{
		id: 'south-america',
		name: 'S. America',
		shortName: 'S.Am',
		color: '#6CD3C6',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -15_000, score: 18 },
			{ year: -13_000, score: 28 },
			{ year: -5_000, score: 38 },
			{ year: -2_000, score: 45 },
			{ year: 0, score: 48 },
			{ year: 500, score: 52 },
			{ year: 1000, score: 58 },
			{ year: 1400, score: 68 },
			{ year: 1532, score: 35 },
			{ year: 1700, score: 42 },
			{ year: 1822, score: 52 },
			{ year: 1900, score: 55 },
			{ year: 1960, score: 58 },
			{ year: 2026, score: 65 }
		],
		events: byYear(southAmericaEvents)
	}
];
