<script context='module'>
export async function load({params}) {
    const id = params.id;
    const url1 = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    const res = await Promise.all([
        fetch(url1, {mode: 'cors'}),
        fetch(url2, {mode: 'cors'}),
    ]);
    
    const loaded = await Promise.all(res.map(r => r.json()));

    return {props: {pokeman:loaded}}
}
</script>




<script>
    export let pokeman;
    import Back from "../../../src/components/back.svelte";
    import Forward from "../../../src/components/forward.svelte";
    import Type from "../../../src/components/type.svelte";
    import TitleEffect from "../../../src/components/titleEffect.svelte";
    import Special from '../../../src/components/special.svelte';

    // height conversions
    $: totalInches = Math.round((pokeman[0].height / 10) * 39.3701);
    $: feet = Math.trunc(totalInches / 12);
    $: remainingInches = totalInches % feet;
</script>

<div class="flex flex-col">
    <TitleEffect pokeman={pokeman[0]}/>
    <div class="flex flex-row space-between justify-center items-center">

        <img class='h-80 w-80 rounded-xl' src={pokeman[0].sprites['front_default']} alt={pokeman[0].name}/>

    </div>

    <div class="flex flex-row m-2 font-mono text-center justify-center">
        <p class='w-auto lg:mx-8'>{pokeman[1].flavor_text_entries[2].flavor_text}</p>
    </div>

    <div class='flex flex-row justify-around m-2 font-mono'>
        <p>Type: <Type pokeman={pokeman[0]}/> </p>
        <p>Height: <strong>{`${feet}'${remainingInches}"`}</strong></p>
        <p>Weight: <strong>{Math.round((pokeman[0].weight / 10) * 2.2)} lbs</strong></p>
    </div>

    <div class='flex flex-row justify-around m-2 font-mono'>
        <p>Generation: <strong>{pokeman[1].generation.name === 'generation-i' ? 'I' : 'II'}</strong></p>
        {#if pokeman[1].is_mythical || pokeman[1].is_baby || pokeman[1].is_legendary }
        <p> <Special pokeman={pokeman[1]}/> </p>
        {/if}
    </div>

    <div class="flex justify-around">
        {#key pokeman[0]}
            {#if pokeman[0].id > 1}
                <Back pokeman={pokeman[0]}/>
            {/if}

            {#if pokeman[0].id < 251}
                <Forward pokeman={pokeman[0]}/>
            {/if}
        {/key}
    </div>
</div>