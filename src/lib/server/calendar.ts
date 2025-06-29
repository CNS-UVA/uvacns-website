import * as ics from 'ics';
import { db } from './db';
import { events } from './db/schema';
import { asc } from 'drizzle-orm';

export async function generateICal() {
	const allEvents = await db.select().from(events).orderBy(asc(events.start));
	const allEventsICal: ics.EventAttributes[] = allEvents.map((evt) => {
		return {
			start: Math.floor(evt.start.getTime() / 1000),
			startInputType: 'utc',
			end: Math.floor(evt.end.getTime() / 1000),
			endInputType: 'utc',
			title: evt.name,
			description: evt.description ?? undefined,
			location: evt.location ?? undefined,
			created: Math.floor(evt.created_at.getTime() / 1000),
			lastModified: Math.floor(evt.updated_at.getTime() / 1000)
		};
	});
	return ics.createEvents(allEventsICal, (error, value) => {
		if (error) {
			throw error;
		}
		return value;
	});
}
