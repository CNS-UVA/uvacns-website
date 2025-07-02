<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import DateTimePicker from '$lib/components/ui/date-time-picker/date-time-picker.svelte';
	import {
		now,
		getLocalTimeZone,
		type DateValue,
		CalendarDateTime
	} from '@internationalized/date';
	import { cn } from '$lib/utils';
	let { event = undefined } = $props();
	let name = $state<string>(event?.name || '');
	let startDate = $state<DateValue>(
		event
			? new CalendarDateTime(
					event.start.getFullYear(),
					event.start.getMonth() + 1,
					event.start.getDate(),
					event.start.getHours(),
					event.start.getMinutes(),
					event.start.getSeconds(),
					0
				)
			: now(getLocalTimeZone())
	);
	let endDate = $state<DateValue>(
		event
			? new CalendarDateTime(
					event.end.getFullYear(),
					event.end.getMonth() + 1,
					event.end.getDate(),
					event.end.getHours(),
					event.end.getMinutes(),
					event.end.getSeconds(),
					0
				)
			: now(getLocalTimeZone())
	);
	let location = $state<string>(event?.location || '');
	let description = $state<string>(event?.description || '');

	function wait(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let open = $state(false);

	async function createOrUpdateEvent() {
		startDate.set({ millisecond: 0 });
		endDate.set({ millisecond: 0 });
		let start = startDate.toDate(getLocalTimeZone()).toISOString();
		let end = endDate.toDate(getLocalTimeZone()).toISOString();
		if (event?.id) {
			await fetch(`/api/events/${event.id}`, {
				method: 'POST',
				body: JSON.stringify({ name, start, end, location, description })
			});
		} else {
			await fetch('/api/events', {
				method: 'POST',
				body: JSON.stringify({ name, start, end, location, description })
			});
		}
		open = false;
		window.location.reload();
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger class={cn(buttonVariants({ variant: event ? 'outline' : 'default' }))}
		>{event ? 'Edit' : 'Add Event'}</Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>{event ? 'Edit Event' : 'Add Event'}</Dialog.Title>
			<!-- <Dialog.Description>
                Make changes to your profile here. Click save when you're done.
            </Dialog.Description> -->
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Name</Label>
				<Input id="name" class="col-span-3" bind:value={name} />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="start" class="text-right">Start</Label>
				<DateTimePicker bind:date={startDate} />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="end" class="text-right">End</Label>
				<DateTimePicker bind:date={endDate} />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="location" class="text-right">Location</Label>
				<Input id="location" class="col-span-3" bind:value={location} />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="description" class="text-right">Description</Label>
				<Textarea id="description" class="col-span-3" bind:value={description} />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit" onclick={createOrUpdateEvent}>Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
