<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let mapElement: HTMLElement;
	let map: L.Map;

	export let latitude: number;
	export let longitude: number;
	export let zoom: number = 13;

	onMount(async () => {
		const leaflet = await import('leaflet');

		map = leaflet.map(mapElement).setView([latitude, longitude], zoom);

		leaflet
			.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom: zoom,
				minZoom: zoom,
				interactive: false
			})
			.addTo(map);

		leaflet
			.marker([latitude, longitude])
			.addTo(map)
			.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
			.openPopup();
	});
</script>

<main>
	<div bind:this={mapElement} class="h-full w-full"></div>
</main>
