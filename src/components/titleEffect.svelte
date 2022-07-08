<script>
    import { blur } from 'svelte/transition'

    export let pokeman;
    const typewriter = (node, { speed = 1}) => {
    const valid = (
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE
    );

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.0075);

    return {
        duration,
        tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
        }
    }};
</script>

<div class="flex justify-center">
    {#key pokeman.name}
        <h1 out:blur in:typewriter|local class='titleNode text-4xl mt-8 uppercase text-center font-mono'>{pokeman.name}</h1>
    {/key}
</div>
