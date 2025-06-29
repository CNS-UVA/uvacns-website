<script lang="ts">
	import type { PageProps } from './$types';
	import config from '../../config';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index';
	import * as Card from '$lib/components/ui/card/index';
	import { page } from '$app/state';
	import { Separator } from '$lib/components/ui/separator';
	import Button from '$lib/components/ui/button/button.svelte';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Events | {config.title}</title>
</svelte:head>

<h1 class="typography">Events</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	Check out what's coming up at CNS!
</p>

<ScrollArea class="mt-8 max-h-fit w-full rounded-md border">
	<div class="p-8">
		{#if data.upcoming.length === 0}
			<p class="text-muted-foreground text-center">
				Sorry, there are no events coming up at this time.
			</p>
		{/if}
		{#each data.upcoming as evt, i}
			<h2 class="text-3xl font-semibold tracking-tight transition-colors">{evt.name}</h2>
			<p class="text-muted-foreground mt-2">
				<strong>When:</strong>
				{evt.start.toLocaleDateString()}
				{evt.start.toLocaleTimeString()} &mdash; {evt.end.toLocaleDateString()}
				{evt.end.toLocaleTimeString()}
			</p>
			<p class="text-muted-foreground mt-2"><strong>Where:</strong> {evt.location}</p>
			<p class="mt-2">{evt.description}</p>
			{#if page.data.session?.user?.admin}
				<div class="mt-4 flex flex-row gap-4">
					<Button variant="secondary">Edit</Button>
					<Button variant="destructive">Delete</Button>
				</div>
			{/if}
			{#if i < data.upcoming.length - 1}
				<Separator class="my-8" />
			{/if}
		{/each}
	</div>
</ScrollArea>
