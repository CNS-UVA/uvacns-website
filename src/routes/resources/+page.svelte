<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import config from '../../config';
</script>

<div class="flex-column">
	<h1 class="pb-8 text-center">Interested in learning more?</h1>

	{#each config.resources.general as resource}
		<div class="py-4">
			<h2 class="py-1">{resource.header}</h2>
			<ul>
				{#each resource.fields as field}
					<li class="py-1">
						<b>{field.header}:</b>
						{#if field.href}<a href={field.href}>{field.text}</a>{:else}{field.text}{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/each}

	<h2 class="pt-8">Want to dive into a specific topic?</h2>
	<p class="py-4">
		Here are some websites that we found useful for learning a variety of security applications:
	</p>

	<Accordion>
		{#each config.resources.specific as category}
			<AccordionItem autocollapse>
				<svelte:fragment slot="summary"><b>{category.category}</b></svelte:fragment>
				<svelte:fragment slot="content">
					<ul>
						{#each category.resources as resource}
							<li>
								<a href={resource.href} class="no-underline pt-4">
									<b>{resource.header}</b>
									<p>{resource.text}</p>
								</a>
							</li>
						{/each}
					</ul>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
