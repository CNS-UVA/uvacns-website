import { db } from '$lib/server/db/index.js';
import { events } from '$lib/server/db/schema.js';
import { error, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { User } from '../../../../auth';

export async function GET({ params }) {
	const num = Number(params.id);
	if (Number.isNaN(num)) {
		return error(400);
	}
	const evts = await db.select().from(events).where(eq(events.id, num));
	if (evts.length === 0) {
		return error(404);
	}
	return json(evts[0]);
}

export async function POST({ request, params, locals }) {
	const session = await locals.auth();
	if (!session?.user) {
		return error(401);
	} else if (!(session?.user as User)?.admin) {
		return error(403);
	}
	const num = Number(params.id);
	if (Number.isNaN(num)) {
		return error(400);
	}
	const { name, start, end, location, description } = await request.json();
	if (new Date(start) > new Date(end)) {
		return error(400);
	}
	await db
		.update(events)
		.set({ name, start: new Date(start), end: new Date(end), location, description })
		.where(eq(events.id, num));
	return new Response(undefined, { status: 204 });
}

export async function DELETE({ params, locals }) {
	const session = await locals.auth();
	if (!session?.user) {
		return error(401);
	} else if (!(session?.user as User)?.admin) {
		return error(403);
	}
	const num = Number(params.id);
	if (Number.isNaN(num)) {
		return error(400);
	}
	await db.delete(events).where(eq(events.id, num));
	return new Response(undefined, { status: 204 });
}
