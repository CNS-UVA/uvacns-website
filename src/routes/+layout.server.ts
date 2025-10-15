import type { LayoutServerLoad } from './$types';
import type { Session } from '../auth';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async (event) => {
	const session = (await event.locals.auth()) as Session | null;

	if (!session) {
		return {
			session,
			resources: []
		};
	}

	const res = await fetch(`${env.AUTH_KEYCLOAK_ISSUER}/account/applications`, {
		headers: {
			Authorization: `Bearer ${session.accessToken}`,
			'Content-Type': 'application/json'
		},
	});

	if (!res.ok) {
		return {
			session,
			resources: []
		};
	}

	const resources = (await res.json()) as { clientId: string, clientName: string; rootUrl: string }[];

	const filteredResources = resources
		.filter(
			(resource) =>
				resource.clientId !== 'account-console' && resource.clientId !== 'website'
		)
		.sort((a, b) => a.clientName.localeCompare(b.clientName));

	return {
		session,
		resources: filteredResources
	};
};
