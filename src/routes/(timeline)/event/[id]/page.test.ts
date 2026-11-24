import { isRedirect } from '@sveltejs/kit';
import { describe, expect, it } from 'vitest';
import { lookup } from '#lib/data/lookup';
import { load } from './+page';

type LoadEvent = Parameters<typeof load>[0];
const run = (id: string) => load({ params: { id } } as LoadEvent);

function redirectOf(id: string) {
	try {
		run(id);
	} catch (e) {
		if (isRedirect(e)) return { status: e.status, location: e.location };
		throw e;
	}
	throw new Error(`expected ${id} to redirect`);
}

describe('/event/[id] load', () => {
	it('returns the event id and page metadata', async () => {
		const [id, { event }] = lookup.byId.entries().next().value!;
		const data = await run(id);
		expect(data).toMatchObject({ eventId: id, meta: { title: expect.stringContaining(event.title) } });
	});

	it('sends unknown ids to the plain timeline with a temporary redirect', () => {
		expect(redirectOf('no-such-event')).toEqual({ status: 307, location: '/' });
	});
});
