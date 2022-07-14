<script>
	export let pokeman;
</script>

<!-- check for special types 'baby', 'legendary', and 'mythical' -- and display if they exist -->
{#if pokeman.is_baby}
	<strong id="special" class="px-3 py-1 rounded-xl capitalize bg-red-200 dark:text-black">
		baby
	</strong>
{/if}

{#if pokeman.is_mythical}
	<strong id="special" class="px-3 py-1 rounded-xl capitalize bg-yellow-400 dark:text-black">
		mythical
	</strong>
{/if}

{#if pokeman.is_legendary}
	<strong id="special" class="px-3 py-1 rounded-xl capitalize bg-slate-400 dark:text-black">
		legendary
	</strong>
{/if}
