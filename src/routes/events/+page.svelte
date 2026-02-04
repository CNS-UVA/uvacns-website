<script lang="ts">
	import type { PageProps } from './$types';
	import config from '../../config';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index';
	import { page } from '$app/state';
	import { Separator } from '$lib/components/ui/separator';
	import EventForm from './event-form.svelte';
	import IcsPopover from './ics-popover.svelte';
	import DeleteDialog from './delete-dialog.svelte';
	import LocationCard from './location-card.svelte';
	import type { User } from '../../auth';
	let { data }: PageProps = $props();

	// Function to get coordinates for a location
	function getLocationCoordinates(location: string): { latitude: number; longitude: number } | null {
		const matchedLocation = config.locations.find(loc => 
			location.toLowerCase().startsWith(loc.prefix.toLowerCase())
		);
		
		if (matchedLocation) {
			return {
				latitude: matchedLocation.latitude,
				longitude: matchedLocation.longitude
			};
		}
		
		// Return null if no match found
		return null;
	}
</script>

<svelte:head>
	<title>Events | {config.title}</title>
</svelte:head>

<h1 class="typography">Events</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	Check out what's coming up at CNS!
</p>

<iframe class="mt-8 w-full h-dvh" src="https://nextcloud.uvacns.com/apps/calendar/embed/2GAnmSSmGbSKT4w3"></iframe>

