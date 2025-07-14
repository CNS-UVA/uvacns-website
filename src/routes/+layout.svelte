<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import config from '../config';

	let { children } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content="The cybersecurity club at the University of Virginia." />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex min-h-screen flex-col">
	<ModeWatcher />
	<Navbar />
	<div class="container mx-auto my-8 flex w-full grow flex-col px-4">
		{@render children()}
	</div>
	<div class="typography container mx-auto mt-auto w-full border-t px-4 pt-4 pb-6">
		<p class="text-muted-foreground text-center text-sm">
			Although this organization has members who are University of Virginia students and may have
			University employees associated or engaged in its activities and affairs, the organization is
			not a part or an agency of the University of Virginia. It is a separate and independent
			organization which is responsible for and manages its own activities and affairs. The
			University does not direct, supervise or control the organization and is not responsible for
			the organization's contracts, acts or omissions.
		</p>
		<p class="text-muted-foreground text-center text-sm">
			&#169; {new Date().getFullYear()} Computer and Network Security Club at the University of Virginia.
		</p>
	</div>
</div>
