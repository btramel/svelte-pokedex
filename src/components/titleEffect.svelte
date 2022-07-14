<script>
	import { blur } from 'svelte/transition';

	export let pokeman;

	// typewriter custom Svelte animation
	const typewriter = (node, { speed = 1 }) => {
		// must be a text node of length 1 or more
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.0075);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};
</script>

<div class="flex justify-center">
	<!-- rerenders whenever the pokemon name changes -->
	{#key pokeman.name}
		<!-- custom animation in, Svelte blur animation out -->
		<h1
			out:blur
			in:typewriter|local
			class="titleNode text-4xl mt-8 uppercase text-center font-mono"
		>
			{pokeman.name}
		</h1>
	{/key}
</div>
