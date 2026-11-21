import * as d3 from 'd3';
import type { ActivityKeyframe } from '#lib/types';

export const BASE_HEIGHT = 4000;
export const LEFT_PADDING = 80;
export const TOP_PADDING = 60;
export const BOTTOM_PADDING = 40;

// Hybrid log/linear scale:
// Top 30% (log): 3,000,000 BCE → 3,000 BCE  (deep prehistory)
// Bottom 70% (linear): 3,000 BCE → present  (written history, evenly spaced)
const LOG_SPLIT_YEAR = -3000;
const LOG_FRACTION = 0.30;
const LINEAR_YEARS = 2026 - LOG_SPLIT_YEAR; // 5026

const LOG_MAX = Math.log10(2027 - (-3_000_000)); // log10(3,002,027)
const LOG_SPLIT = Math.log10(2027 - LOG_SPLIT_YEAR); // log10(5027)

export function yearToPixel(year: number, totalHeight: number = BASE_HEIGHT): number {
	const drawHeight = totalHeight - TOP_PADDING - BOTTOM_PADDING;
	const logHeight = LOG_FRACTION * drawHeight;
	const linearHeight = (1 - LOG_FRACTION) * drawHeight;

	if (year <= LOG_SPLIT_YEAR) {
		const ybp = Math.max(1, 2027 - year);
		const logYBP = Math.log10(ybp);
		const f = (LOG_MAX - logYBP) / (LOG_MAX - LOG_SPLIT);
		return TOP_PADDING + f * logHeight;
	} else {
		const f = (year - LOG_SPLIT_YEAR) / LINEAR_YEARS;
		return TOP_PADDING + logHeight + f * linearHeight;
	}
}

export function getActivityScore(year: number, keyframes: ActivityKeyframe[]): number {
	if (keyframes.length === 0) return 50;
	const sorted = [...keyframes].sort((a, b) => a.year - b.year);

	if (year <= sorted[0].year) return sorted[0].score;
	if (year >= sorted[sorted.length - 1].year) return sorted[sorted.length - 1].score;

	for (let i = 0; i < sorted.length - 1; i++) {
		if (year >= sorted[i].year && year <= sorted[i + 1].year) {
			const t = (year - sorted[i].year) / (sorted[i + 1].year - sorted[i].year);
			return sorted[i].score + t * (sorted[i + 1].score - sorted[i].score);
		}
	}
	return 50;
}

export function computeBandPath(
	keyframes: ActivityKeyframe[],
	centerX: number,
	maxHalfWidth: number,
	totalHeight: number = BASE_HEIGHT
): string {
	const sorted = [...keyframes].sort((a, b) => a.year - b.year);

	type Point = { y: number; halfWidth: number };
	const points: Point[] = sorted.map((kf) => ({
		y: yearToPixel(kf.year, totalHeight),
		halfWidth: Math.max(3, maxHalfWidth * (kf.score / 100))
	}));

	const areaGen = d3
		.area<Point>()
		.y((d) => d.y)
		.x0((d) => centerX - d.halfWidth)
		.x1((d) => centerX + d.halfWidth)
		.curve(d3.curveCatmullRom.alpha(0.5));

	return areaGen(points) ?? '';
}

export function formatYear(year: number): string {
	if (year < 0) {
		const abs = Math.abs(year);
		if (abs >= 1_000_000) {
			const m = abs / 1_000_000;
			return `${m % 1 === 0 ? m : m.toFixed(1)}M BCE`;
		}
		if (abs >= 10_000) return `${Math.round(abs / 1000)}k BCE`;
		return `${abs.toLocaleString()} BCE`;
	}
	if (year === 0) return '1 CE';
	if (year <= 999) return `${year} CE`;
	return year.toString();
}

const YEAR_LABEL_YEARS = [
	-3_000_000, -1_000_000, -300_000, -100_000, -50_000, -10_000, -5_000, -3_000, -2_000, -1_000,
	-500, 0, 500, 1000, 1500, 1700, 1800, 1900, 1950, 2000, 2026
];

export function getYearLabels(totalHeight: number = BASE_HEIGHT) {
	return YEAR_LABEL_YEARS.map((year) => ({
		year,
		y: yearToPixel(year, totalHeight),
		label: formatYear(year)
	}));
}
