<script>
	export let pokeman;
</script>

<!-- general tailwind classes -->
<!-- hover and dark mode tailwind classes -->
<!-- points to previous pokemon -->
<!-- pulls previous pokemon sprite -->
<a
	class="font-mono text-black bg-offwhite shadow-xl 
     flex flex-col rounded-lg items-center p-2
     hover:scale-105 hover:shadow-md dark:bg-slate-700 dark:text-white"
	href={`/pokemon/${pokeman.id - 1}`}
>
	<img
		class="h-30"
		src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			pokeman.id - 1
		}.png`}
		alt="Previous Pokemon"
	/>
	<p class="text-xs">Previous</p>
</a>
