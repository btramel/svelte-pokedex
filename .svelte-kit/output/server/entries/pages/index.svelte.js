import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../chunks/index-1259f1f6.js";
const PokemanCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<a class="${"border-2 border-blue-300 hover:scale-105 p-6 bg-gray-50 text-gray-800 dark:bg-slate-800 dark:text-gray-100 dark:border-2 dark:border-black text-center rounded-lg shadow-md hover:shadow-xl flex flex-col items-center"}"${add_attribute("href", `/pokemon/${pokeman.id}`, 0)}><img class="${"h-40 w-40"}"${add_attribute("src", pokeman.image, 0)}${add_attribute("alt", pokeman.name, 0)}>
    <h2 class="${"capitalize text-2xl"}">${escape(pokeman.id)}. ${escape(pokeman.name)}</h2></a>`;
});
async function load({ params }) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=251";
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  return { props: { pokemon: loadedPokemon } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokemon } = $$props;
  let searchTerm = "";
  let filteredPokemon = [];
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  {
    {
      {
        filteredPokemon = [...pokemon];
      }
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Svelte Kit Pokedex</title>`, ""}`, ""}


<input class="${"w-full rounded-md text-lg p-4 mt-4 border-2 border-gray-200 dark:bg-slate-800 dark:text-gray-100 dark:border-black"}" type="${"text"}" placeholder="${"Search Pokemon"}"${add_attribute("value", searchTerm, 0)}>



<div class="${"py-4 grid gap-4 md:grid-cols-2 grid-cols-1"}">${each(filteredPokemon, (pokeman) => {
    return `${validate_component(PokemanCard, "PokemanCard").$$render($$result, { pokeman }, {}, {})}`;
  })}</div>`;
});
export { Routes as default, load };
