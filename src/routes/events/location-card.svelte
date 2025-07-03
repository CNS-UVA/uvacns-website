<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import Map from '$lib/components/map.svelte';

	export let latitude: number;
	export let longitude: number;
	export let zoom: number = 18;
</script>

<HoverCard.Root>
	<HoverCard.Trigger>Where?</HoverCard.Trigger>
	<HoverCard.Content>
		<Map {latitude} {longitude} {zoom} />
	</HoverCard.Content>
</HoverCard.Root>
