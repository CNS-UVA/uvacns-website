<script lang="ts">
	import config from '../../config';
</script>

<div class="flex-column">
	<h1 class="pb-8 text-center">What's happening this semester?</h1>
	{#each config.events as event}
		<div class="py-8 border-t border-dashed border-slate-600 max-[1580px]:px-10">
			<h2 class="py-1">{event.header}</h2>
			<ul>
				{#each event.fields as field}
					<li class="py-2">
						<b>{field.header}:</b>
						{#if field.href}<a href={field.href}>{field.text}</a>{:else}{field.text}{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
