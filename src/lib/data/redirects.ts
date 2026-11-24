/**
 * Event ids appear in shared links (/event/<id>), so they are permanent.
 * If an event's id ever has to change, add `'old-id': 'new-id'` here so old links keep working.
 * The unit tests check that every target exists and no old id is still in use.
 */
export const renamedEventIds: Record<string, string> = {};
