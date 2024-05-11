<script lang="ts">
	// @ts-nocheck
	// The ordering of these imports is critical to your app working properly
	//import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import config from '../config';
	import { page } from '$app/stores';
	const data = $page.data;

	const onToggleMenu = () => {
		const links = document.querySelector("#links");
		links?.classList.toggle("hidden");
		const icon = document.querySelector("#burger-icon");
		icon.innerHTML = icon.innerHTML === "☰" ? "X" : "☰";
	}
	
</script>

<svelte:head>
	<title>{data.title ?? ''}{data.title ? ' - ' : ''}{config.title}</title>
	<meta name="description" content="The website for the {config.title}" />
</svelte:head>

<AppShell slotPageContent="">
	<svelte:fragment slot="header">
		<!-- App Bar for desktop -->
		<AppBar background="dark:bg-slate-900" class="shadow-lg px-[10%] max-[1280px]:hidden">
			<svelte:fragment slot="lead">
				<h4 class="font-bold text-gray-100 hover:text-orange-600" >{config.title}</h4>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex items-center gap-8 max-[1280px]:gap-2 max-[1280px]:flex-col ">
					{#each config.nav as link}
						<a class="!text-gray-100" href={link.href}>{link.text}</a>
					{/each}
				</div>
			</svelte:fragment>
		</AppBar>
		<!-- App Bar for mobile / smaller screens -->
		<AppBar gridColumns="grid-cols-1" background="dark:bg-slate-900" class="shadow-lg px-[10%] min-[1281px]:hidden">
				<div class="flex justify-between items-center">
					<h4 class="font-bold !text-3xl font-bold text-gray-100 hover:text-orange-600">CNS@UVA</h4>
					<!-- <ion-icon name="reorder-four-outline" on:click={onToggleMenu} on:keydown={() => {}} class="text-2xl cursor-pointer"></ion-icon> -->
					<h1 id="burger-icon" on:click={onToggleMenu} on:keydown={() => {}} class="select-none text-2xl cursor-pointer">☰</h1>
				</div>
				<div id="links" class="flex items-center gap-8 max-[1280px]:gap-4 justify-center max-[1280px]:flex-col hidden pt-2">
					{#each config.nav as link}
						<a class="text-xl" on:click={onToggleMenu} href={link.href}>{link.text}</a>
					{/each}
				</div>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<svelte:fragment slot="pageFooter">
		<AppBar background="dark:bg-slate-900" class="shadow-lg">
			<p class="flex justify-center items-center text-sm">© CNS@UVA</p>
			<p class="flex text-center items-center text-xs max-w-[80%] mx-auto">
				Although this organization has members who are University of Virginia students and may have
				University employees associated or engaged in its activities and affairs, the organization
				is not a part or an agency of the University of Virginia. It is a separate and independent
				organization which is responsible for and manages its own activities and affairs. The
				University does not direct, supervise or control the organization and is not responsible for
				the organization’s contracts, acts or omissions.
			</p>
		</AppBar>
	</svelte:fragment>
	<div class="container relative mx-auto py-8">
		<slot />
	</div>
</AppShell>
