<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import config from '../../config';

	let officers = config.officers;
</script>

<h1 class="pb-8 text-center">2023-2024 Executive Board</h1>
<div class="grid grid-cols-3 max-[1280px]:grid-cols-1 py-4 gap-y-8">
	{#each officers as officer}
		<div class="text-center p-4 card card-hover mx-auto !bg-slate-900 rounded-xl">
			<Avatar
				initials="{officer.first_name[0]}{officer.last_name[0]}"
				width="w-64"
				src={officer.img}
				rounded="rounded-full"
				background="bg-orange-500"
				border="border-4 border-slate-900 hover:!border-slate-200"
			/>
			<p class="pt-4 text-3xl"><b> {officer.first_name} {officer.last_name} </b></p>
			<p> {officer.role} </p>
		</div>
	{/each}
</div>
