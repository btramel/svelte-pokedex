<script context="module">
	export async function load({ params }) {
		const id = params.id;
		// two URLs: one for sprites and details, two for flavor text and addl details
		const url1 = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const url2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
		const res = await Promise.all([fetch(url1, { mode: 'cors' }), fetch(url2, { mode: 'cors' })]);

		const loaded = await Promise.all(res.map((r) => r.json()));

		return { props: { pokeman: loaded } };
	}
</script>

<script>
	export let pokeman;
	import Back from '../../../src/components/back.svelte';
	import Forward from '../../../src/components/forward.svelte';
	import Type from '../../../src/components/type.svelte';
	import TitleEffect from '../../../src/components/titleEffect.svelte';
	import Special from '../../../src/components/special.svelte';

	// height conversions
	$: totalInches = Math.round((pokeman[0].height / 10) * 39.3701);
	$: feet = Math.trunc(totalInches / 12);
	$: remainingInches = totalInches % feet;

	// flavor text is ripped from the Gameboy with all its weird formatting
	// this formats it for HTML in the browser
	$: html = pokeman[1].flavor_text_entries[2].flavor_text
		.replace('\f', '\n')
		.replace('\u00ad\n', '')
		.replace('\u00ad', '')
		.replace(' -\n', ' - ')
		.replace('-\n', '-')
		.replace('\n', ' ');
</script>

<!-- container -->
<div class="flex flex-col max-h-screen">
	<!-- header -->
	<TitleEffect pokeman={pokeman[0]} />

	<!-- sprite -->
	<div class="flex flex-row space-between justify-center items-center">
		<img
			class="h-52 xl:h-96 rounded-xl"
			src={pokeman[0].sprites['front_default']}
			alt={pokeman[0].name}
		/>
	</div>

	<!-- flavor text -->
	<div class="flex flex-row m-2 font-mono text-center justify-center">
		<p class="w-auto lg:mx-8">{html}</p>
	</div>

	<!-- details -->
	<div class="flex flex-row items-center justify-around m-2 font-mono">
		<p class="flex flex-col sm:flex-row">Type:<Type pokeman={pokeman[0]} /></p>
		<p class="flex flex-col sm:flex-row">
			Height: <strong>{`${feet}'${remainingInches}"`}</strong>
		</p>
		<p class="flex flex-col sm:flex-row">
			Weight: <strong>{Math.round((pokeman[0].weight / 10) * 2.2)}lbs</strong>
		</p>
	</div>

	<!-- details continuted -->
	<div class="flex flex-row justify-around m-2 font-mono">
		<!-- which gen? -->
		<p>Generation: <strong>{pokeman[1].generation.name === 'generation-i' ? 'I' : 'II'}</strong></p>

		<!-- if special type, list it -->
		{#if pokeman[1].is_mythical || pokeman[1].is_baby || pokeman[1].is_legendary}
			<p>
				<Special pokeman={pokeman[1]} />
			</p>
		{/if}
	</div>

	<!-- show last and next pokemon -->
	<div class="flex justify-around">
		<!-- key block rerenders if pokemon[0] (data from the first url) updates -->
		{#key pokeman[0]}
			<!-- first pokemon doesn't have a Back component -->
			{#if pokeman[0].id > 1}
				<Back pokeman={pokeman[0]} />
			{/if}

			<!-- last pokemon doesn't have a Forward component -->
			{#if pokeman[0].id < 251}
				<Forward pokeman={pokeman[0]} />
			{/if}
		{/key}
	</div>
</div>
