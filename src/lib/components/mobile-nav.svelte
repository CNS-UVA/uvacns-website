<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button, type ButtonProps } from '$lib/components/ui/button/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { page } from '$app/state';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import config from '../../config';

	type MobileLinkProps = HTMLAnchorAttributes & {
		content?: string;
		isSignIn?: boolean;
		isSignOut?: boolean;
	};

	let { class: className, ...restProps }: ButtonProps = $props();

	let open = $state(false);
</script>

{#snippet MobileLink({
	href,
	content,
	isSignIn = false,
	isSignOut = false,
	class: className,
	...props
}: MobileLinkProps)}
	<a
		{href}
		onclick={() => {
			if (isSignIn) {
				signIn('keycloak');
			} else if (isSignOut) {
				signOut();
			} else {
				open = false;
			}
		}}
		class={cn('text-2xl font-medium', className)}
		{...props}
	>
		{content}
	</a>
{/snippet}

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				{...restProps}
				variant="ghost"
				class={cn(
					'extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent',
					className
				)}
			>
				<div class="relative flex h-8 w-4 items-center justify-center">
					<div class="relative size-4">
						<span
							class={cn(
								'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
								open ? 'top-[0.4rem] -rotate-45' : 'top-1'
							)}
						></span>
						<span
							class={cn(
								'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
								open ? 'top-[0.4rem] rotate-45' : 'top-2.5'
							)}
						></span>
					</div>
					<span class="sr-only">Toggle Menu</span>
				</div>
				<span class="flex h-8 items-center text-lg leading-none font-medium"> {config.shortTitle} </span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content
		class="bg-background/90 no-scrollbar h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
		align="start"
		side="bottom"
		alignOffset={-16}
		sideOffset={14}
		preventScroll
	>
		<div class="flex flex-col gap-12 overflow-auto px-6 py-6">
			<div class="flex flex-col gap-4">
				<div class="text-muted-foreground text-sm font-medium">Menu</div>
				<div class="flex flex-col gap-3">
					{@render MobileLink({ href: '/', content: 'Home' })}
					{@render MobileLink({ href: '/about', content: 'About' })}
					{@render MobileLink({ href: '/events', content: 'Events' })}
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<div class="text-muted-foreground text-sm font-medium">Divisions</div>
				<div class="flex flex-col gap-3">
					{@render MobileLink({ href: '/divisions/defense', content: 'Cyber Defense' })}
					{@render MobileLink({ href: '/divisions/offense', content: 'Cyber Offense' })}
					{@render MobileLink({ href: '/divisions/infrastructure', content: 'Infrastructure' })}
				</div>
			</div>
			<div class="flex flex-col gap-4">
				{#if page.data.session?.user}
					<div class="text-muted-foreground text-sm font-medium">
						{page.data.session?.user?.name}
					</div>
					<div class="flex flex-col gap-3">
						{@render MobileLink({ content: 'Sign Out', isSignOut: true, class: 'hover:cursor-pointer' })}
					</div>
				{:else}
					<div class="flex flex-col gap-3">
						{@render MobileLink({ content: 'Sign In', isSignIn: true, class: 'hover:cursor-pointer' })}
					</div>
				{/if}
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
