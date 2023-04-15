<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
    import '../app.postcss';
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
            <svelte:fragment slot="lead">
                <a
                    href="/"
                >
                <strong class="text-xl uppercase">
                    Computer Network and Security Club
                </strong>
                </a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn variant-ghost-surface"
					href="/"
					target="_blank"
					rel="noreferrer"
				>
					Home
				</a>
				<a
					class="btn variant-ghost-surface"
					href="/resources"
					target="_blank"
					rel="noreferrer"
				>
				    Resources
				</a>
				<a
					class="btn variant-ghost-surface"
					href="/officers"
					target="_blank"
					rel="noreferrer"
				>
				    Officers
				</a>
				<a
					class="btn variant-ghost-surface"
					href="https://discord.gg/87aKE8gqSc"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>


