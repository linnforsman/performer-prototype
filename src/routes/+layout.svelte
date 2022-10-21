<script>
	import '$lib/styles/app.css';
	import Layout from '$lib/components/Layout.svelte';

	import { name } from '$lib/info';
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<Layout>
	<slot />
</Layout>
