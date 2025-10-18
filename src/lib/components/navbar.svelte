<script lang="ts">
	import { page } from '$app/state';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import Button from './ui/button/button.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import MobileNav from './mobile-nav.svelte';
	import config from '../../config';
	import Logo from './logo.svelte';
	import { mainNavigation, divisionNavigation } from '$lib/navigation';
</script>

<header class="bg-background sticky top-0 z-50 w-full border-b py-4">
	<div class="container mx-auto flex flex-row items-center justify-between gap-1 px-4 md:px-0">
		<MobileNav class="md:hidden" />
		<div class="hidden flex-row items-center gap-1 md:flex">
			<Button variant="ghost" class="space-x-2 px-4 py-2 has-[>svg]:px-4" href="/">
				<Logo />
				<div class="font-bold">{config.shortTitle}</div>
			</Button>
			<NavigationMenu.Root viewport={false}>
				<NavigationMenu.List>
					{#each mainNavigation as item}
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href={item.href} class={navigationMenuTriggerStyle()}>{item.title}</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/each}
					<NavigationMenu.Item>
						<NavigationMenu.Trigger>{divisionNavigation.title}</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<ul class="grid w-80 gap-4 p-2">
								<li>
									{#each divisionNavigation.items as division}
										<NavigationMenu.Link href={division.href}>
											<div class="font-medium">{division.title}</div>
											{#if division.description}
												<div class="text-muted-foreground">{division.description}</div>
											{/if}
										</NavigationMenu.Link>
									{/each}
								</li>
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					{#if page.data.session?.user && page.data.resources && page.data.resources.length > 0}
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid w-80 gap-4 p-2">
									{#each page.data.resources as resource}
										<li>
											<NavigationMenu.Link href={resource.rootUrl}>
												<div class="font-medium">{resource.clientName}</div>
												{#if resource.description}
													<div class="text-muted-foreground">{resource.description}</div>
												{/if}
											</NavigationMenu.Link>
										</li>
									{/each}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					{/if}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
		<div class="my-auto hidden flex-row items-center gap-1 md:flex">
			{#if page.data.session?.user}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Button variant="ghost" class="align-middle">
							<Avatar.Root>
								<Avatar.Image
									src={page.data.session.user.image ?? undefined}
									alt={page.data.session.user.name ?? ''}
								/>
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
