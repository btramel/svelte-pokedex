<script>
import { toggle_class } from "svelte/internal";


  const themes = ['', 'dark-theme', 'light-theme']
  const icons = ['🌙', '🌞', '⭐']
  let index = 0
</script>

<button on:click={() => { index = (index + 1) % themes.length }}>{icons[index]}</button>

<svelte:body class={themes[index]}/>

<svelte:head>
  <style>
    /* CSS file */
    :root {
      --background-color: #a19585;
      --text-color: #f7f7f7;
      --primal-color: #30a5a7;
    }

    .light-theme {
      --background-color: #fffaf4;
      --text-color: #201f20;
    }

    .dark-theme {
      --background-color: #201f20;
      --text-color: #fffaf4;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  </style>
</svelte:head>