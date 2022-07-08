<script>
    export let pokeman;
</script>

<a class='font-mono text-black dark:text-white flex flex-col items-center rounded-lg p-2 hover:scale-105 bg-slate-100 dark:bg-slate-700' href={`/pokemon/${pokeman.id + 1}`}>
    <img class='h-30' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id + 1}.png`} alt="Previous Pokemon">
    <p class="text-xs">Next</p>
</a>