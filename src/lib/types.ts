export interface TimelineEvent {
	id: string;
	title: string;
	year: number; // negative = BCE
	endYear?: number;
	description: string;
	significance: string; // The "So what?" answer
	wikipediaSlug?: string;
	tags?: string[];
}

export interface ActivityKeyframe {
	year: number;
	score: number; // 0–100
}

export interface Continent {
	id: string;
	name: string;
	color: string;
	activityKeyframes: ActivityKeyframe[];
	events: TimelineEvent[];
}
