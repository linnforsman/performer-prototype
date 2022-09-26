<script>
	import '$lib/styles/app.css';
	import Sidebar from '../lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<main>
	<Sidebar />
	<slot />
</main>
