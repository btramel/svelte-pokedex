<script>
    export let pokeman;
    import { scale } from 'svelte/transition';
</script>

    <!-- tailwind classes: general, hover state, dark mode -->
    <!-- scale transition out -->
    <!-- points to pokemon [id] page -->
    <a
    class='flex flex-col items-center border-1 bg-offwhite 
    p-6 text-gray-600 text-center rounded-lg shadow-xl
    hover:scale-105 hover:shadow-md 
    dark:bg-slate-800 dark:text-gray-100 dark:border-1 dark:border-black'
    out:scale 
    href={`/pokemon/${pokeman.id}`}
    >
    <img class='h-40 w-40' src={pokeman.image} alt={pokeman.name}>
    <h2 class='capitalize text-2xl'>{pokeman.id}. {pokeman.name}</h2>
</a>
