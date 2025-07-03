<script lang="ts">
	import { page } from '$app/state';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import Button from './ui/button/button.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import Shield from '@lucide/svelte/icons/shield';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import MobileNav from './mobile-nav.svelte';
	import config from '../../config';
</script>

<header class="bg-background sticky top-0 z-50 w-full border-b py-4">
	<div class="container mx-auto flex flex-row items-center justify-between gap-1 px-4 md:px-0">
		<MobileNav class="md:hidden" />
		<div class="hidden flex-row items-center gap-1 md:flex">
			<Button variant="ghost" class="space-x-2 px-4 py-2 has-[>svg]:px-4" href="/">
				<Shield color="#f54900" />
				<div class="font-bold">{config.shortTitle}</div>
			</Button>
			<NavigationMenu.Root viewport={false}>
				<NavigationMenu.List>
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a href="/about" class={navigationMenuTriggerStyle()}>About</a>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a href="/events" class={navigationMenuTriggerStyle()}>Events</a>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger>Divisions</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<ul class="grid w-80 gap-4 p-2">
								<li>
									<NavigationMenu.Link href="/divisions/defense">
										<div class="font-medium">Cyber Defense</div>
										<div class="text-muted-foreground">Defend against cyber attacks.</div>
									</NavigationMenu.Link>
									<NavigationMenu.Link href="/divisions/offense">
										<div class="font-medium">Cyber Offense</div>
										<div class="text-muted-foreground">Exploit vulnerabilities in systems.</div>
									</NavigationMenu.Link>
									<NavigationMenu.Link href="/divisions/infrastructure">
										<div class="font-medium">Infrastructure</div>
										<div class="text-muted-foreground">
											Maintain the systems that keep CNS running.
										</div>
									</NavigationMenu.Link>
								</li>
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
		<div class="my-auto hidden flex-row items-center gap-1 md:flex">
			{#if page.data.session?.user}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Button variant="ghost">
							<Avatar.Root>
								<Avatar.Fallback>
									{page.data.session?.user?.name?.at(0)}
								</Avatar.Fallback>
							</Avatar.Root>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Group>
							<DropdownMenu.Label>{page.data.session?.user?.name}</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Profile</DropdownMenu.Item>
							<DropdownMenu.Item onclick={() => signOut()}>Sign Out</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{:else}
				<Button variant="ghost" onclick={() => signIn('keycloak')}>Sign In</Button>
			{/if}
		</div>
	</div>
</header>
