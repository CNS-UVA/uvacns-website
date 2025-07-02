<script lang="ts">
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { page } from "$app/state";
    import Copy from "@lucide/svelte/icons/copy";
    import { onMount } from "svelte";
    let copied = false;
    let icsUrl = "";
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
    <Popover.Trigger class={buttonVariants({ variant: "outline" })}
     >Add to Your Calendar</Popover.Trigger
    >
    <Popover.Content class="w-full max-w-xs">
     <div class="grid gap-4 w-full">
      <div class="space-y-2">
       <h4 class="font-medium leading-none">Add to Your Calendar</h4>
       <p class="text-muted-foreground text-sm">
        Copy this URL and add it to your calendar app.
       </p>
      </div>
      <div
        class="rounded-md border px-4 py-3 font-mono text-sm flex items-center justify-between gap-2 cursor-pointer group w-full min-w-0"
        on:click={copyIcsUrl}
        title="Copy to clipboard"
        tabindex="0"
        on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { copyIcsUrl(); } }}
        role="button"
        aria-label="Copy calendar URL"
      >
        <span class="truncate w-0 flex-1">{icsUrl}</span>
        <button
          type="button"
          class="ml-2 p-1 rounded hover:bg-muted transition-colors flex-shrink-0"
          aria-label="Copy calendar URL"
          tabindex="-1"
          on:click|stopPropagation={copyIcsUrl}
        >
          <Copy class="w-4 h-4" />
        </button>
        {#if copied}
          <span class="ml-2 text-primary text-xs flex-shrink-0 font-sans">Copied!</span>
        {/if}
      </div>
     </div>
    </Popover.Content>
   </Popover.Root>