<script lang="ts">
	// Custom UVA theme
	import '../theme.postcss';
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
</script>

<svelte:head>
	<title>{data.title ?? ''}{data.title ? ' - ' : ''}{config.title}</title>
	<meta name="description" content="The website for the {config.title}" />
</svelte:head>

<AppShell slotPageContent="">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="dark:bg-slate-900" class="shadow-lg">
			<svelte:fragment slot="lead">
				<h4 class="font-normal bg-gradient-to-t from-orange-600 to-orange-600 bg-clip-text text-transparent box-decoration-clone">{config.title}</h4>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#each config.nav as link}
					<a class="btn bg-initial !text-slate-100" href={link.href}>{link.text}</a>
				{/each}
			</svelte:fragment>
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
	<div class="container relative mx-auto py-16">
		<slot />
	</div>
</AppShell>
