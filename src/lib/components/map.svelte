<script lang="ts">
	import { onMount } from 'svelte';

	let mapElement: HTMLElement;
	let map: L.Map;
	let loading = true;
	let error = '';

	export let latitude: number;
	export let longitude: number;
	export let zoom: number = 13;
	export let popupText: string = '';

	onMount(async () => {
		try {
			const leaflet = await import('leaflet');

			// Wait for element to be properly mounted and visible
			if (!mapElement) {
				throw new Error('Map element not found');
			}

			// Wait a bit longer for the hover card to be fully visible
			await new Promise(resolve => setTimeout(resolve, 100));

			map = leaflet.map(mapElement, {
				center: [latitude, longitude],
				zoom: zoom,
				zoomControl: true,
				attributionControl: false
			});

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					maxZoom: 19,
					subdomains: ['a', 'b', 'c']
				})
				.addTo(map);

			// Create custom icon to fix alignment issues
			const customIcon = leaflet.icon({
				iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
				shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [0, -41],
				shadowSize: [41, 41]
			});

			const marker = leaflet.marker([latitude, longitude], { icon: customIcon }).addTo(map);

			// Enable map interactions
			map.dragging.enable();
			map.touchZoom.enable();
			map.doubleClickZoom.enable();
			map.scrollWheelZoom.enable();
			map.boxZoom.enable();
			map.keyboard.enable();

			// Force map to resize and center properly
			setTimeout(() => {
				map.invalidateSize(true);
				map.setView([latitude, longitude], zoom);
				// Additional refresh to ensure tiles load
				setTimeout(() => {
					map.invalidateSize(true);
				}, 100);
				loading = false;
			}, 300);
		} catch (e) {
			error = 'Failed to load map';
			loading = false;
			console.error('Map loading error:', e);
		}
	});
</script>

<main class="relative h-full w-full">
	<div bind:this={mapElement} class="h-full w-full" class:hidden={loading || error}></div>
	{#if loading}
		<div class="absolute inset-0 flex items-center justify-center bg-gray-100">
			<div class="text-sm text-gray-600">Loading map...</div>
		</div>
	{:else if error}
		<div class="absolute inset-0 flex items-center justify-center bg-gray-100">
			<div class="text-sm text-red-600">{error}</div>
		</div>
	{/if}
</main>

<style>
	:global(.leaflet-container) {
		height: 100% !important;
		width: 100% !important;
		z-index: 1;
	}
	
	:global(.leaflet-control-attribution) {
		display: none;
	}
</style>
