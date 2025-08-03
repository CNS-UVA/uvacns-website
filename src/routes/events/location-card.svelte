<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import Map from '$lib/components/map.svelte';

	export let latitude: number;
	export let longitude: number;
	export let zoom: number = 16;
	export let popupText: string = '';
</script>

<HoverCard.Root>
	<HoverCard.Trigger class="text-xs underline hover:no-underline hover:text-primary">Where?</HoverCard.Trigger>
	<HoverCard.Content class="w-80 h-60 p-2">
		<div class="w-full h-full rounded border overflow-hidden">
			<Map {latitude} {longitude} {zoom} {popupText} />
		</div>
	</HoverCard.Content>
</HoverCard.Root>
