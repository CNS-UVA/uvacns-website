import { db } from '$lib/server/db/index.js';
import { events } from '$lib/server/db/schema.js';
import { error, json } from '@sveltejs/kit';
import { asc } from 'drizzle-orm';
import type { User } from '../../../auth';

export async function GET() {
	const allEvents = await db.select().from(events).orderBy(asc(events.start));
	return json(allEvents);
}

export async function POST({ request, locals }) {
	const session = await locals.auth();
	if (!session?.user) {
		return error(401);
	} else if (!(session?.user as User)?.admin) {
		return error(403);
	}
	const { name, start, end, location, description } = await request.json();
	if (new Date(start) > new Date(end)) {
		return error(400);
	}
	const output = await db
		.insert(events)
		.values({ name, start: new Date(start), end: new Date(end), location, description })
		.returning({ id: events.id });
	return json(output[0], { status: 201 });
}

export async function DELETE({ locals }) {
	const session = await locals.auth();
	if (!session?.user) {
		return error(401);
	} else if (!(session?.user as User)?.admin) {
		return error(403);
	}
	await db.delete(events);
	return new Response(undefined, { status: 204 });
}
