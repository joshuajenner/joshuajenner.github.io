<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.ico";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="py-2 border-b-2 border-slate-800">
    <div class="page">
        <p class="font-[ArealMono] font-bold italic text-amber-400">JJ</p>
    </div>
</nav>
{@render children()}
