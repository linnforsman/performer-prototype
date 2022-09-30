<script>
	import { page } from '$app/stores';
	import GYTR from '$lib/images/Magenta GYTR.png';
	const nav = [
		{ title: 'User', path: '/user' },
		{ title: 'Stats', path: '/analysis' },
		{ title: 'Codex', path: '/codex' }
	];
</script>

<aside
	class="bg-violet-900 ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
>
	<div>
		<div class="-mx-6 px-6 py-4">
			<a href="/">
				<img src={GYTR} class="w-7" alt="" />
			</a>
		</div>
	</div>

	<div class="mt-8 text-center">
		<img
			src={GYTR}
			alt="Your user profile."
			class="w-5 m-auto rounded-full object-contain lg:w-28 lg:h-28"
		/>
		<h5 class="hidden mt-4 text-xl font-semibold text-hotpink-500 uppercase lg:block">
			Izakk Placeholder
		</h5>
		<span class="hidden text-violent lg:block">PERFORMER Candidate</span>
	</div>

	{#each nav as item}
		<ul class="space-y-2 tracking-wide mt-8">
			<a
				class="block py-3 pr-4 pl-3 dark:text-sky-400 dark:hover:text-white dark:hover:italic"
				class:active={$page.url.pathname === item.path}
				href={item.path}
				target="_self">{item.title}</a
			>
		</ul>
	{/each}
</aside>
