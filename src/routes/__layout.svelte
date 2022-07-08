<!-- information in this file is included on each page
 -->
<script>
    import Nav from '../components/nav.svelte';
    import '../app.css';
</script>
 <div class="p-8 max-w-6xl mx-auto">
    <Nav/>
     <slot />
 </div>
 <style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
 </style>