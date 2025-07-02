<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { page } from '$app/state';
	import Copy from '@lucide/svelte/icons/copy';
	import { onMount } from 'svelte';
	let copied = false;
	let icsUrl = '';
	onMount(() => {
		icsUrl = `${page.url.origin}/events.ics`;
	});
	async function copyIcsUrl() {
		await navigator.clipboard.writeText(icsUrl);
		copied = true;
		setTimeout(() => (copied = false), 1200);
	}
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}
		>Add to Your Calendar</Popover.Trigger
	>
	<Popover.Content class="w-full max-w-xs">
		<div class="grid w-full gap-4">
			<div class="space-y-2">
				<h4 class="leading-none font-medium">Add to Your Calendar</h4>
				<p class="text-muted-foreground text-sm">Copy this URL and add it to your calendar app.</p>
			</div>
			<div
				class="group flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-md border px-4 py-3 font-mono text-sm hover:border-primary"
				on:click={copyIcsUrl}
				title="Copy to clipboard"
				tabindex="0"
				on:keydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						copyIcsUrl();
					}
				}}
				role="button"
				aria-label="Copy calendar URL"
			>
				<span class="w-0 flex-1 truncate">{icsUrl}</span>
				<button
					type="button"
					class="hover:bg-muted ml-2 flex-shrink-0 rounded p-1 transition-colors"
					aria-label="Copy calendar URL"
					tabindex="-1"
					on:click|stopPropagation={copyIcsUrl}
				>
					<Copy class="h-4 w-4" />
				</button>
				{#if copied}
					<span class="text-primary ml-2 flex-shrink-0 font-sans text-xs">Copied!</span>
				{/if}
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
