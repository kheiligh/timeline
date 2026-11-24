import { redirect } from '@sveltejs/kit';
import { eventPath, resolveEventId } from '#lib/data/lookup';
import { eventMeta } from '#lib/utils/meta';
import type { PageLoad } from './$types';

// The timeline itself is in the (timeline) layout; this route only picks the event and its metadata.
export const load: PageLoad = ({ params }) => {
	const resolved = resolveEventId(params.id);
	if (resolved.kind === 'renamed') redirect(301, eventPath(resolved.id));
	// An unknown id (typo, truncated link) falls back to the plain timeline rather than an error page.
	if (resolved.kind === 'missing') redirect(307, '/');

	const { event, continent } = resolved.ref;
	return { eventId: event.id, meta: eventMeta(event, continent) };
};
