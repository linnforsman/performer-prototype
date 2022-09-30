<script>
	import { store } from '../../hooks/auth';
	import Logged from '$lib/components/Logged.svelte';
	import Login from '$lib/components/Login.svelte';
</script>

<Login />

{#if $store != null}
	<Logged />
{:else}
	<Login />
{/if}
