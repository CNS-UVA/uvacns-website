import { db } from '$lib/server/db';
import { events } from '$lib/server/db/schema';
import { gt, asc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const upcoming = await db
		.select()
		.from(events)
		.where(gt(events.end, new Date()))
		.orderBy(asc(events.start));
	return {
		upcoming: upcoming
	};
};
