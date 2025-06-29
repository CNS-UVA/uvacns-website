import { db } from '$lib/server/db/index.js';
import { events } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';
import { asc, gt } from 'drizzle-orm';

export async function GET() {
	const allEvents = await db
		.select()
		.from(events)
		.where(gt(events.end, new Date()))
		.orderBy(asc(events.start));
	return json(allEvents);
}
