<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import Mail from '@lucide/svelte/icons/mail';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import Send from '@lucide/svelte/icons/send';
	import config from '../config';
</script>

<h1 class="typography">Computer and Network Security Club @ UVA</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	The cybersecurity club at the University of Virginia.
</p>
<div class="mx-auto my-8 flex w-full flex-col justify-center gap-4 md:flex-row">
	<Button href="https://lists.virginia.edu/sympa/subscribe/cnsuva"
		><Mail />Join our mailing list!</Button
	><Button href="https://discord.com/invite/AeSy8wM3NV"><MessageSquare />Join our Discord!</Button
	><Button href="mailto:cnsuva-officers@virginia.edu"><Send />Contact us!</Button>
</div>
<div class="flex size-full grow place-content-center">
	<Carousel.Root
		class="m-auto w-3xl"
		opts={{
			loop: true
		}}
	>
		
		<Carousel.Content>
			{#each config.carousel as image}
				<Carousel.Item>
					<img
						class="m-auto size-full object-contain"
						src={image.src}
						alt={image.alt}
					/>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
