<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import Fa from 'svelte-fa';
	import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons';
</script>

<h1 class="typography">Computer and Network Security Club @ UVA</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	The cybersecurity club at the University of Virginia.
</p>
<div class="mx-auto my-8 flex w-full flex-col justify-center gap-4 md:flex-row">
	<Button href="https://lists.virginia.edu/sympa/subscribe/cnsuva"
		><Fa icon={faEnvelope} />Join our mailing list!</Button
	><Button href="https://discord.com/invite/AeSy8wM3NV"><Fa icon={faDiscord} />Join our Discord!</Button>
	<Button href="mailto:cnsuva-officers@virginia.edu"><Fa icon={faPaperPlane} />Contact us!</Button>
</div>
<div class="flex size-full grow place-content-center">
	<Carousel.Root
		class="m-auto w-3xl"
		opts={{
			loop: true
		}}
	>
		<Carousel.Content>
			<Carousel.Item>
				<img
					class="m-auto size-full object-contain"
					src="/images/CCDCTeam2025.jpg"
					alt="Our 2025 cyber defense team."
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					class="m-auto size-full object-contain"
					src="/images/CCDCTeam2024.jpg"
					alt="Our 2024 cyber defense team."
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					class="m-auto size-full object-contain"
					src="/images/CCDCTeam2023.jpg"
					alt="Our 2023 cyber defense team."
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					class="m-auto size-full object-contain"
					src="/images/CCDCTeam2019.jpg"
					alt="Our 2019 cyber defense team."
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					class="m-auto size-full object-contain"
					src="/images/CCDCTeam2018.jpg"
					alt="Our 2018 cyber defense team."
				/>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
