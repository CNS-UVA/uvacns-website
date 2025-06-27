<script lang="ts">
	import { page } from '$app/state';
	import config from '../config';
</script>

<svelte:head>
	<title>Error {page.status} | {config.title}</title>
</svelte:head>

<h1 class="typography">
	Error {page.status}
</h1>
<h3 class="mt-4 text-center">{page.error?.message}</h3>
