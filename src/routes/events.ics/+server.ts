import { db } from '$lib/server/db/index.js';
import { events } from '$lib/server/db/schema.js';
import { asc } from 'drizzle-orm';
import { createEvents } from 'ics';

export async function GET() {
	const allEvents = await db.select().from(events).orderBy(asc(events.start));
	// create ICS file with all items in allEvents
	const icsData = allEvents.map((event) => ({
		start: [
			event.start.getFullYear(),
			event.start.getMonth() + 1,
			event.start.getDate(),
			event.start.getHours(),
			event.start.getMinutes()
		] as [number, number, number, number, number],
		end: [
			event.end.getFullYear(),
			event.end.getMonth() + 1,
			event.end.getDate(),
			event.end.getHours(),
			event.end.getMinutes()
		] as [number, number, number, number, number],
		title: event.name,
		location: event.location,
		description: event.description || ''
	}));

	return new Promise((resolve) => {
		createEvents(icsData, (_error, value) => {
			resolve(new Response(value, { headers: { 'Content-Type': 'text/calendar' } }));
		});
	});
}
