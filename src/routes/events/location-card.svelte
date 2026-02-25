<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import Map from '$lib/components/map.svelte';

	export let latitude: number;
	export let longitude: number;
	export let zoom: number = 16;
	export let popupText: string = '';
</script>

<HoverCard.Root>
	<HoverCard.Trigger class="hover:text-primary text-xs underline hover:no-underline"
		>Where?</HoverCard.Trigger
	>
	<HoverCard.Content class="h-60 w-80 p-2">
		<div class="h-full w-full overflow-hidden rounded border">
			<Map {latitude} {longitude} {zoom} {popupText} />
		</div>
	</HoverCard.Content>
</HoverCard.Root>
