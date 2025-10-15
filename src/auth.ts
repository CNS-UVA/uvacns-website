import { SvelteKitAuth } from '@auth/sveltekit';
import Keycloak from '@auth/sveltekit/providers/keycloak';
import type { AdapterUser, AdapterSession } from '@auth/core/adapters';

export type User = {
	admin: boolean;
	defense: boolean;
	offense: boolean;
	infrastructure: boolean;
} & AdapterUser;

export type Session = {
	user: User;
	accessToken: string;
} & AdapterSession;

const cnsKeycloak = Keycloak({
	profile(profile) {
		return {
			admin: profile.groups.includes('officers'),
			defense: profile.groups.includes('cyber-defense-division'),
			offense: profile.groups.includes('cyber-offense-division'),
			infrastructure: profile.groups.includes('infrastructure-division'),
			...profile
		};
	}
});

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [cnsKeycloak],
	callbacks: {
		jwt({ token, user, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			if (
				user &&
				'admin' in user &&
				'defense' in user &&
				'offense' in user &&
				'infrastructure' in user
			) {
				token.admin = user.admin;
				token.defense = user.defense;
				token.offense = user.offense;
				token.infrastructure = user.infrastructure;
			}
			return token;
		},
		session({ session, token }) {
			(session as Session).accessToken = token.accessToken as string;
			if (typeof token.admin === 'boolean') {
				(session.user as User).admin = token.admin;
			}
			if (typeof token.defense === 'boolean') {
				(session.user as User).defense = token.defense;
			}
			if (typeof token.offense === 'boolean') {
				(session.user as User).offense = token.offense;
			}
			if (typeof token.infrastructure === 'boolean') {
				(session.user as User).infrastructure = token.infrastructure;
			}
			return session;
		}
	},
	trustHost: true
});
