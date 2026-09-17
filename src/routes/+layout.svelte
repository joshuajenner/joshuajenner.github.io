<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.ico";
    import Linkedin from "$lib/icons/linkedin.svelte";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="py-2 border-b-2 border-slate-800">
    <div class="page flex justify-between items-center">
        <a href="/">
            <h1 class="hover:text-amber-400">JJ</h1>
        </a>
        <a href="https://www.linkedin.com/in/joshuajennerdev/" target="_blank" class="h-4 w-4 fill-sky-700 hover:fill-sky-600 cursor-pointer">
            <Linkedin />
        </a>
    </div>
</nav>
{@render children()}
