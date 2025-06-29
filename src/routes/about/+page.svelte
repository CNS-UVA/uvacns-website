<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Mail from '@lucide/svelte/icons/mail';
	import User from '@lucide/svelte/icons/user';
	import config from '../../config';
	import * as Avatar from '$lib/components/ui/avatar/index';
</script>

<svelte:head>
	<title>About | {config.title}</title>
</svelte:head>

<h1 class="typography">About</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	We aim to promote cybersecurity expertise through education and competition.
</p>
<div class="typography grid grid-cols-1 gap-8 md:grid-cols-2">
	<div class="w-full">
		<h2>Who Are We?</h2>
		<p>
			We are a group of UVA students interested in software, network, hardware, and application
			security. We engage in security competitions as a club, host interesting speakers, develop
			security tools and challenges, and leverage industry connections.
		</p>
	</div>
	<div class="w-full">
		<h2>How Do I Join?</h2>
		<p>
			CNS is open to anyone, regardless of major or cybersecurity experience. There is no
			application or fee required to be a general body member of our club. Just check out <a
				href="/events">what we're doing</a
			> and show up!
		</p>
	</div>
</div>
<div>
	<h2 class="typography">Divisions</h2>
	<p class="typography">CNS consists of three divisions.</p>
	<div class="mx-auto mt-8 flex w-full flex-wrap justify-center gap-8">
		<Card.Root class="basis-sm">
			<Card.Header>
				<Card.Title>Cyber Defense Division</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				The Cyber Defense Division protects computers, networks, and applications from cyber attacks
				through hardening and incident response.
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" href="/divisions/defense">
					<BookOpen />
					Learn More
				</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="basis-sm">
			<Card.Header>
				<Card.Title>Cyber Offense Division</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				The Cyber Offense Division identifies and exploits vulnerabilities in computers and networks
				for fun and profit.
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" href="/divisions/offense">
					<BookOpen />
					Learn More
				</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="basis-sm">
			<Card.Header>
				<Card.Title>Infrastructure Division</Card.Title>
			</Card.Header>
			<Card.Content class="grow">
				The Infrastructure Division manages CNS's computing resources and develops technical
				solutions to enable the other parts of the club.
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" href="/divisions/infrastructure">
					<BookOpen />
					Learn More
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
<div>
	<h2 class="typography">Leadership</h2>
	<div class="mx-auto mt-8 flex w-full flex-wrap justify-center gap-8">
		{#each config.officers as officer}
			<Card.Root class="basis-sm">
				<Card.Header>
					<Card.Title>
						{officer.first_name}
						{officer.last_name}
					</Card.Title>
					<Card.Description>
						{officer.role}
					</Card.Description>
				</Card.Header>
				<Card.Content class="grow">
					<Avatar.Root class="size-full">
						<Avatar.Image src={officer.img} />
						<Avatar.Fallback>
							<User class="size-full" />
						</Avatar.Fallback>
					</Avatar.Root>
				</Card.Content>
				<Card.Footer>
					<Button class="w-full" href="mailto:{officer.computing_id}@virginia.edu">
						<Mail />
						Email
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
