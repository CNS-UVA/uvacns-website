export interface NavigationItem {
	href: string;
	title: string;
	description?: string;
}

export interface NavigationSection {
	title: string;
	items: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
	{ href: '/about', title: 'About' },
	{ href: '/events', title: 'Events' }
];

export const divisionNavigation: NavigationSection = {
	title: 'Divisions',
	items: [
		{
			href: '/divisions/defense',
			title: 'Cyber Defense',
			description: 'Defend against cyber attacks.'
		},
		{
			href: '/divisions/offense',
			title: 'Cyber Offense',
			description: 'Exploit vulnerabilities in systems.'
		},
		{
			href: '/divisions/infrastructure',
			title: 'Infrastructure',
			description: 'Maintain the systems that keep CNS running.'
		}
	]
};
