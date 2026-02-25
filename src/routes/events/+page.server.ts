import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import ICAL from 'ical.js';

export const load: PageServerLoad = async ({ fetch }) => {
	if (!env.CALENDAR_URL) {
		return { upcoming: [] };
	}

	try {
		const response = await fetch(env.CALENDAR_URL);
		const text = await response.text();

		const events = parseICS(text);

		const upcoming = events
			.filter((e) => e.end > new Date())
			.sort((a, b) => a.start.getTime() - b.start.getTime());

		return {
			upcoming
		};
	} catch (e) {
		console.error('Failed to fetch or parse calendar:', e);
		return { upcoming: [] };
	}
};

function parseICS(icsData: string) {
	try {
		const jcalData = ICAL.parse(icsData);
		const vcalendar = new ICAL.Component(jcalData);
		const vevents = vcalendar.getAllSubcomponents('vevent');

		return vevents.map((vevent) => {
			const event = new ICAL.Event(vevent);
			return {
				id: 0, // Placeholder ID
				name: event.summary,
				description: event.description || null,
				start: event.startDate.toJSDate(),
				end: event.endDate.toJSDate(),
				location: event.location || 'TBD',
				created_at: new Date(),
				updated_at: new Date()
			};
		});
	} catch (e) {
		console.error('Error parsing ICS data with ical.js:', e);
		return [];
	}
}
