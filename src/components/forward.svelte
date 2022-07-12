<script>
    export let pokeman;
</script>

<!-- general tailwind classes -->
<!-- hover and dark mode tailwind classes -->
<!-- points to next pokemon -->
<!-- pulls next pokemon sprite -->
<a 
    class='font-mono text-black bg-offwhite shadow-xl flex flex-col items-center rounded-lg p-2 
    hover:shadow-md hover:scale-105 dark:bg-slate-700 dark:text-white' 
    href={`/pokemon/${pokeman.id + 1}`}>
    
    <img 
    class='h-30' 
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id + 1}.png`} 
    alt="Next Pokemon">

    <p class="text-xs">Next</p>
</a>