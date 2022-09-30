<script>
	const barWidth = 50;
	const height = 300;

	const mStats = [100, 125, 250, 100, 225, 275, 150, 275, 250, 150];
</script>

<h1 class="lg:text-3xl text-hotpink-400 flex justify-center opacity-70">mStats</h1>
<p class="text-hotpink-400 opacity-75">What the hell is mStats?</p>

<svg>
	{#each mStats as point, i}
		<rect
			width={barWidth}
			height={point}
			x={i * barWidth}
			y={height - point}
			fill="hotpink"
			stroke="black"
		/>
	{/each}
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
	}
</style>
