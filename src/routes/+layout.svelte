<script lang='ts'>
    // Custom UVA theme
    import '../theme.postcss';
	// The ordering of these imports is critical to your app working properly
	//import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
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
                    Computer Network and Security Club @ UVA
                </strong>
                </a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn variant-ghost-surface"
					href="/"
				>
					Home
				</a>
				<a
					class="btn variant-ghost-surface"
					href="/events"
				>
				    Events
				</a>
				<a
					class="btn variant-ghost-surface"
					href="/resources"
				>
				    Resources
				</a>
				<a
					class="btn variant-ghost-surface"
					href="/officers"
				>
				    Officers
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
    <!-- Page Route Content -->
    <svelte:fragment slot="pageFooter">
        <AppBar>
                <p class="flex text-center items-center text-xs">Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part or an agency of the University of Virginia. It is a separate and independent organization which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions. </p>
                <p class="flex justify-center items-center text-sm pt-2"> © CNS@UVA </p>
        </AppBar>
    </svelte:fragment>
	<slot />
</AppShell>


