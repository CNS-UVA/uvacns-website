import { SvelteKitAuth } from '@auth/sveltekit';
import Keycloak from '@auth/sveltekit/providers/keycloak';

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
		jwt({ token, user }) {
			if (user) {
				token.admin = user.admin;
				token.defense = user.defense;
				token.offense = user.offense;
				token.infrastructure = user.infrastructure;
			}
			return token;
		},
		session({ session, token }) {
			session.user.admin = token.admin;
			session.user.defense = token.defense;
			session.user.offense = token.offense;
			session.user.infrastructure = token.infrastructure;
			return session;
		}
	},
	trustHost: true
});
