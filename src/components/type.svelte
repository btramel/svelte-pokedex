<script>
    export let pokeman;

    $: poketype = pokeman.types[0].type.name;

    const poketypes = {
        normal : 'bg-gray-200',
        grass : 'bg-green-400',
        fire : 'bg-red-500',
        water : 'bg-blue-500',
        electric : 'bg-yellow-400',
        psychic : 'bg-purple-500',
        dark : 'bg-slate-800',
        poison : 'bg-purple-600',
        bug : 'bg-lime-600',
        ice : 'bg-cyan-400',
        steel : 'bg-zinc-500',
        ground : 'bg-orange-700',
        rock : 'bg-stone-500',
        fighting : 'bg-orange-500',
        fairy : 'bg-red-200'
    };

    let newtype;
    $: for (const [key, value] of Object.entries(poketypes)) {
    if (key == poketype) {
        newtype = `${value}`
    }}
    
</script>

{#key poketype}
    <strong id='type' class='px-3 py-1 rounded-xl capitalize {newtype} dark:text-black'> {poketype} </strong>
{/key}
