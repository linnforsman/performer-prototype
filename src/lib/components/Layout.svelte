<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { open } from '$lib/components/store';
	const style = {
		container: `bg-hotpink-500 h-screen overflow-hidden relative`,
		main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 lg:px-4`,
		mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-24 lg:space-y-4`
	};

	onMount(() => {
		document.getElementsByTagName('body').item(0).removeAttribute('tabindex');
	});

	if (browser) {
		page.subscribe(() => {
			// close side navigation when route changes
			$open = false;
		});
	}
</script>

<svelte:head>
	<title />
</svelte:head>

<div class={style.container}>
	<div class="flex items-start">
		<Sidebar mobilePosition="right" />
		<div class={style.mainContainer}>
			<Navigation />
			<main class={style.main}>
				<slot />
			</main>
		</div>
	</div>
</div>
