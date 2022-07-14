<!-- information in this file is included on each page -->
<script>
	import Nav from '../components/nav.svelte';
	import '../app.css';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<!-- Nav component added to every page -->
	<Nav />
	<slot />
</div>

<style>
	/* global style for base Light mode */
	:global(body) {
		background-color: blanchedalmond;
	}
	/* Tailwind imports */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
