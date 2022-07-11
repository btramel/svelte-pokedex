<script context='module'>
    // loading here so that by the time we need the data, we already have it
    export async function load({params}) {
            // query the first two generations of pokemon
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=500';
    const res = await fetch(url);
    const data = await res.json();
    // return pokemon data in custom JSON format
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            // id is index + 1 to make array index correspond with pokedex number
            id: index + 1,
            // pulling sprite images
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,            
        };
    });

    // gives us the ability to load the information before it gets to the user. it comes through the props
    return {props: { pokemon:loadedPokemon}}
    }
</script>

<script>

    import PokemanCard from '../components/pokemanCard.svelte';
    export let pokemon;

    let searchTerm = '';
    let filteredPokemon = [];

    // reactive syntax for any data that changes
    $: {
        if(searchTerm) {
            // search pokemon
            filteredPokemon = pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else {
            // reset view to all pokemon
            // [...$pokemon is a copy of the pokemon values, redisplayed]
            filteredPokemon = [...pokemon];
        }
    };

</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<!-- var searchTerm updates alongside the input value because of bind:value -->
<input class='w-full rounded-md text-lg p-4 mt-4  shadow-xl bg-offwhite border-1 border-gray-200
dark:bg-slate-800 dark:text-gray-100 dark:border-black' 
type="text" bind:value={searchTerm} placeholder='Search Pokedex'>

<!-- $ displays the variable but ALSO reacts to changes within that data -->
<!-- operates like a foreach, displaying name of each pokemon
if any data in the store changes, it will rerender -->
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman={pokeman}/>
    {/each}
</div>