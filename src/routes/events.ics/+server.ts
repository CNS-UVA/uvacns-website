import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export async function GET({ fetch }) {
	if (!env.CALENDAR_URL) {
		return new Response('CALENDAR_URL is not set', { status: 500 });
	}

	try {
		const response = await fetch(env.CALENDAR_URL);
		if (!response.ok) {
			return error(response.status as any, `Failed to fetch calendar: ${response.statusText}`);
		}

		const body = await response.text();
		return new Response(body, {
			headers: {
				'Content-Type': 'text/calendar',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch (e) {
		console.error('Error proxying calendar:', e);
		return error(500, 'Internal Server Error');
	}
}
