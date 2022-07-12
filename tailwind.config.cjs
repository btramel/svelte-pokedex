// @type {import('tailwindcss').Config}
// extended tailwind-recognized colors
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        corn: '#fff8cd',
        offwhite: '#faebd7',
      },
    },
  },
  plugins: [],
}
