<script>
    export let pokeman;
    import { scale } from 'svelte/transition';
</script>

<a class='border-1 bg-offwhite hover:scale-105 p-6 text-gray-600 
dark:bg-slate-800 dark:text-gray-100 dark:border-1 dark:border-black 
text-center rounded-lg shadow-xl hover:shadow-md flex flex-col items-center' 
out:scale href={`/pokemon/${pokeman.id}`}>
    <img class='h-40 w-40' src={pokeman.image} alt={pokeman.name}>
    <h2 class='capitalize text-2xl'>{pokeman.id}. {pokeman.name}</h2>
</a>
