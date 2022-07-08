<script>
    export let pokeman;
</script>

<a class='font-mono text-black dark:text-white flex flex-col rounded-lg items-center p-2 hover:scale-105 hover:shadow-lg bg-slate-100 dark:bg-slate-700' href={`/pokemon/${pokeman.id - 1}`}>
    <img class='h-30' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id - 1}.png`} alt="Previous Pokemon">
    <p class="text-xs">Previous</p>
</a>