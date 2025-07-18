<script lang="ts" module>
	import type { Time as TimeType } from '@internationalized/date';
	import type { Period } from './time-picker-utils';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type PeriodSelectorProps = WithElementRef<HTMLButtonAttributes> & {
		period: Period;
		setPeriod?: (period: PeriodSelectorProps['period']) => void;

		time: TimeType | undefined;
		setTime?: (time: TimeType) => void;

		onRightFocus?: () => void;
		onLeftFocus?: () => void;
	};
</script>

<script lang="ts">
	import { display12HourValue, setDateByType } from './time-picker-utils';
	import { Time } from '@internationalized/date';
	import * as Select from '$lib/components/ui/select';
	import { onMount } from 'svelte';

	let {
		period = $bindable('PM'),
		time = $bindable(new Time(0, 0)),
		ref,

		onLeftFocus,
		onRightFocus,
		setPeriod,
		setTime
	}: PeriodSelectorProps = $props();

	function handlePeriod() {
		const tempTime = time.copy();
		const hours = display12HourValue(time.hour);
		const _time = setDateByType(
			tempTime,
			hours.toString(),
			'12hours',
			period === 'AM' ? 'PM' : 'AM'
		);

		time = _time;
		setTime?.(_time);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') onRightFocus?.();
		if (e.key === 'ArrowLeft') onLeftFocus?.();
	}

	function handleValueChange(value: Period) {
		period = value;
		setPeriod?.(value);

		/**
		 * trigger an update whenever the user switches between AM and PM;
		 * otherwise user must manually change the hour each time
		 */
		if (time) {
			handlePeriod();
		}
	}

	onMount(() => {
		handlePeriod();
	});
</script>

<div class="flex h-10 items-center">
	<Select.Root
		type="single"
		bind:value={period}
		onValueChange={(value) => handleValueChange(value as Period)}
	>
		<Select.Trigger
			bind:ref
			class="focus:bg-accent focus:text-accent-foreground w-[65px]"
			onkeydown={handleKeyDown}>{period ?? ''}</Select.Trigger
		>
		<Select.Content>
			<Select.Item value="AM">AM</Select.Item>
			<Select.Item value="PM">PM</Select.Item>
		</Select.Content>
	</Select.Root>
</div>
