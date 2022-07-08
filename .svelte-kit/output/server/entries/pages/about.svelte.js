import { c as create_ssr_component } from "../../chunks/index-1259f1f6.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"sm:hidden flex flex-col font-mono my-8"}"><h1 class="${"text-2xl text-center my-2"}">Hello there!</h1>
    
    <img class="${"my-2"}" src="${"src/components/img/oak.jpg"}" alt="${"Professor Oak"}">
    
    <div><div><p>Welcome to the wonderful world of Pokemon! My name is Oak. People call me the Pokemon Prof! The world is inhabited by creatures called Pokemon. From some people, Pokemon are pets. Others use them for fights. Myself... I study Pokemon as a profession.</p>

            <br>

            <p>On a serious note, if you want to see how I built this website using Svelte, Tailwind, some magic, and a lot of love, check out my <a class="${"font-bold underline hover:shadow-lg"}" href="${"https://github.com/btramel"}" target="${"none"}">Github</a>.</p></div></div></div>


<div class="${"hidden sm:grid grid-cols-2 font-mono my-8"}"><div><p>Welcome to the wonderful world of Pokemon! My name is Oak. People call me the Pokemon Prof! The world is inhabited by creatures called Pokemon. From some people, Pokemon are pets. Others use them for fights. Myself... I study Pokemon as a profession.</p>

            <br>

            <p>If you want to see how I built this website using Svelte, TailwindCSS, some magic, and a lot of love, check out my <a class="${"font-bold underline hover:shadow-lg"}" href="${"https://github.com/btramel"}" target="${"none"}">Github</a>.</p></div>
        <div><h1 class="${"text-4xl text-center"}">Hello there!</h1>
    
            <img class="${"my-2"}" src="${"src/components/img/oak.jpg"}" alt="${"Professor Oak"}"></div></div>`;
});
export { About as default };
