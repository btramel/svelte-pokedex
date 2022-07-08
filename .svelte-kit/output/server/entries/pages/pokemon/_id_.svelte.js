import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/index-1259f1f6.js";
const Back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<a class="${"font-mono text-black dark:text-white flex flex-col rounded-lg items-center p-2 hover:scale-105 hover:shadow-lg bg-slate-100 dark:bg-slate-700"}"${add_attribute("href", `/pokemon/${pokeman.id - 1}`, 0)}><img class="${"h-30"}"${add_attribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id - 1}.png`, 0)} alt="${"Previous Pokemon"}">
    <p class="${"text-xs"}">Previous</p></a>`;
});
const Forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<a class="${"font-mono text-black dark:text-white flex flex-col items-center rounded-lg p-2 hover:scale-105 bg-slate-100 dark:bg-slate-700"}"${add_attribute("href", `/pokemon/${pokeman.id + 1}`, 0)}><img class="${"h-30"}"${add_attribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id + 1}.png`, 0)} alt="${"Previous Pokemon"}">
    <p class="${"text-xs"}">Next</p></a>`;
});
const Type = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let poketype;
  let { pokeman } = $$props;
  const poketypes = {
    normal: "bg-gray-200",
    grass: "bg-green-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    psychic: "bg-purple-500",
    dark: "bg-slate-800",
    poison: "bg-purple-600",
    bug: "bg-lime-600",
    ice: "bg-cyan-400",
    steel: "bg-zinc-500",
    ground: "bg-orange-700",
    rock: "bg-stone-500",
    fighting: "bg-orange-500",
    fairy: "bg-red-200"
  };
  let newtype;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  poketype = pokeman.types[0].type.name;
  {
    for (const [key, value] of Object.entries(poketypes)) {
      if (key == poketype) {
        newtype = `${value}`;
      }
    }
  }
  return `<strong id="${"type"}" class="${"px-3 py-1 rounded-xl capitalize " + escape(newtype) + " dark:text-black"}">${escape(poketype)}</strong>`;
});
const TitleEffect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<div class="${"flex justify-center"}"><h1 class="${"titleNode text-4xl mt-8 uppercase text-center font-mono"}">${escape(pokeman.name)}</h1></div>`;
});
const Special = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `${pokeman.is_baby ? `<strong id="${"special"}" class="${"px-3 py-1 rounded-xl capitalize bg-red-200 dark:text-black"}">baby </strong>` : ``}

${pokeman.is_mythical ? `<strong id="${"special"}" class="${"px-3 py-1 rounded-xl capitalize bg-yellow-400 dark:text-black"}">mythical </strong>` : ``}

${pokeman.is_legendary ? `<strong id="${"special"}" class="${"px-3 py-1 rounded-xl capitalize bg-slate-400 dark:text-black"}">legendary </strong>` : ``}`;
});
async function load({ params }) {
  const id = params.id;
  const url1 = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const url2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const res = await Promise.all([fetch(url1, { mode: "cors" }), fetch(url2, { mode: "cors" })]);
  const loaded = await Promise.all(res.map((r) => r.json()));
  return { props: { pokeman: loaded } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalInches;
  let feet;
  let remainingInches;
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  totalInches = Math.round(pokeman[0].height / 10 * 39.3701);
  feet = Math.trunc(totalInches / 12);
  remainingInches = totalInches % feet;
  return `<div class="${"flex flex-col"}">${validate_component(TitleEffect, "TitleEffect").$$render($$result, { pokeman: pokeman[0] }, {}, {})}
    <div class="${"flex flex-row space-between justify-center items-center"}"><img class="${"h-80 w-80 rounded-xl"}"${add_attribute("src", pokeman[0].sprites["front_default"], 0)}${add_attribute("alt", pokeman[0].name, 0)}></div>

    <div class="${"flex flex-row m-2 font-mono text-center justify-center"}"><p class="${"w-auto lg:mx-8"}">${escape(pokeman[1].flavor_text_entries[2].flavor_text)}</p></div>

    <div class="${"flex flex-row justify-around m-2 font-mono"}"><p>Type: ${validate_component(Type, "Type").$$render($$result, { pokeman: pokeman[0] }, {}, {})}</p>
        <p>Height: <strong>${escape(`${feet}'${remainingInches}"`)}</strong></p>
        <p>Weight: <strong>${escape(Math.round(pokeman[0].weight / 10 * 2.2))} lbs</strong></p></div>

    <div class="${"flex flex-row justify-around m-2 font-mono"}"><p>Generation: <strong>${escape(pokeman[1].generation.name === "generation-i" ? "I" : "II")}</strong></p>
        ${pokeman[1].is_mythical || pokeman[1].is_baby || pokeman[1].is_legendary ? `<p>${validate_component(Special, "Special").$$render($$result, { pokeman: pokeman[1] }, {}, {})}</p>` : ``}</div>

    <div class="${"flex justify-around"}">${pokeman[0].id > 1 ? `${validate_component(Back, "Back").$$render($$result, { pokeman: pokeman[0] }, {}, {})}` : ``}

            ${pokeman[0].id < 251 ? `${validate_component(Forward, "Forward").$$render($$result, { pokeman: pokeman[0] }, {}, {})}` : ``}</div></div>`;
});
export { U5Bidu5D as default, load };
