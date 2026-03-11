<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
    import * as Card from '$lib/components/ui/card/index';
    import BookOpen from '@lucide/svelte/icons/book-open';
	import config from '../../config';
</script>

<svelte:head>
	<title>Social Engineering Competition | {config.title}</title>
</svelte:head>

<h1 class="typography">Social Engineering Competition</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	Team information for the 2026 CARE Social Engineering Competition.
</p>
<div class="typography mt-8">
    <h2>Team Information</h2>
	<ul>
        <li><strong>Team Name:</strong> University of Virginia</li>
        <li><strong>School Name:</strong> University of Virginia</li>
        <li><strong>Faculty Advisor:</strong> Jack Davidson</li>
    </ul>
</div>
<div>
	<h2 class="typography">Team Members</h2>
	<div class="mx-auto mt-8 flex w-full flex-wrap justify-center gap-8">
		<Card.Root class="basis-xs">
			<Card.Header>
				<Card.Title>Michael Kent</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				Computer Science major, with a minor in Sociology. While it is not a common combination, I believe understanding technology shouldn't stop at the technical.
			</Card.Content>
		</Card.Root>
		<Card.Root class="basis-xs">
			<Card.Header>
				<Card.Title>Iuri Vintonyak</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				4th year CS major interested in all things related to cyber offense.
			</Card.Content>
		</Card.Root>
		<Card.Root class="basis-xs">
			<Card.Header>
				<Card.Title>Grace Ko</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				Computer Science student interested in cybersecurity.
			</Card.Content>
		</Card.Root>
        <Card.Root class="basis-xs">
			<Card.Header>
				<Card.Title>Sladjana Suzic</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				Hi, I am a 2nd-year CS major in the E-school, with an interest in ethical social engineering, combining cybersecurity with my interest in human behavior. Looking forward to working together!
			</Card.Content>
		</Card.Root>
	</div>
</div>
<div class="mt-8">
     <h2 class="typography">Video</h2>
     <!-- TODO: video -->
      <iframe class="mt-8 mx-auto" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tnyWtMdrUMC_0_e8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
