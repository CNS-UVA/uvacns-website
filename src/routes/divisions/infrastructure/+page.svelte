<script lang="ts">
	import config from '../../../config';
</script>

<svelte:head>
	<title>Infrastructure Division | {config.title}</title>
</svelte:head>

<h1 class="typography">Infrastructure Division</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	The Infrastructure Division manages CNS's computing resources and develops technical solutions to
	enable the other parts of the club.
</p>
<img
	class="m-auto mt-10 w-3xl"
	src="/images/ArjunChaseInstallingServer.jpg"
	alt="Infrastructure Division members installing a server"
/>
<div class="typography">
	<div>
		<h2>The CNS Network</h2>
		<p>
			CNS is the only computer science club at the University that hosts its own computing
			infrastructure. Our cluster is located in Rice Hall and runs Proxmox VE with a Ceph storage
			backend. We use it to host everything from our website and documentation to mock networks for
			cyber defense practices.
		</p>
	</div>
	<div>
		<h2>The Cyber Range</h2>
		<p>
			CNS is currently in the process of building the UVA Cyber Range, a state-of-the-art computing
			environment to experiment with cybersecurity techniques in a controlled setting. Funded by <a
				href="https://jeffersontrust.org/tag/uva-cyber-range/"
				>over $70,000 in grants from the Jefferson Trust</a
			>, the Cyber Range allows UVA students to spin up and tear down virtual machines and networks,
			enabling them to gain cybersecurity experience without owning expensive hardware. The Cyber
			Range is almost complete and we hope to make it available to club members by the Fall 2025
			semester.
		</p>
	</div>
	<!-- <div>
		<h2>Automated Network Creation</h2>
		<p>Network Builder exists.</p>
	</div> -->
</div>
