<script lang="ts">
    import Typescript from "$lib/icons/typescript.svelte";
    import Javascript from "$lib/icons/javascript.svelte";
    import React from "$lib/icons/react.svelte";
    import Vue from "$lib/icons/vue.svelte";
    import Svelte from "$lib/icons/svelte.svelte";
    import Tailwind from "$lib/icons/tailwind.svelte";
    import Mui from "$lib/icons/mui.svelte";
    import Mysql from "$lib/icons/mysql.svelte";
    import Postgresql from "$lib/icons/postgresql.svelte";
    import MongoDB from "$lib/icons/mongodb.svelte";
    import Nodejs from "$lib/icons/nodejs.svelte";
    import Nextjs from "$lib/icons/nextjs.svelte";
    import Nuxt from "$lib/icons/nuxt.svelte";
    import Csharp from "$lib/icons/csharp.svelte";
    import Unity from "$lib/icons/unity.svelte";
    import Firebase from "$lib/icons/firebase.svelte";
    import Hexagon from "$lib/icons/hexagon.svelte";

    let { id } = $props();
</script>

<div class="skill">
    <div class="icon">
        {#if id === "Typescript"}
            <Typescript />
        {:else if id === "Javascript"}
            <Javascript />
        {:else if id === "React"}
            <React />
        {:else if id === "Vue"}
            <Vue />
        {:else if id === "Svelte"}
            <Svelte />
        {:else if id === "SvelteKit"}
            <Svelte />
        {:else if id === "Tailwind CSS"}
            <Tailwind />
        {:else if id === "MUI"}
            <Mui />
        {:else if id === "MySQL"}
            <Mysql />
        {:else if id === "PostgreSQL"}
            <Postgresql />
        {:else if id === "MongoDB"}
            <MongoDB />
        {:else if id === "Node.js"}
            <Nodejs />
        {:else if id === "Next.js"}
            <Nextjs />
        {:else if id === "Nuxt"}
            <Nuxt />
        {:else if id === "C#"}
            <Csharp />
        {:else if id === "Unity"}
            <Unity />
        {:else if id === "Firebase"}
            <Firebase />
        {:else}
            <Hexagon />
        {/if}
    </div>
    <p>{id}</p>
</div>

<style>
    .skill {
        background-color: var(--color-slate-800);
        border-radius: 4px;
        display: flex;
        padding: 4px 8px;
        gap: 4px;
        align-items: center;
    }
    .skill > p {
        color: var(--color-slate-300);
        font-size: 0.8rem;
        margin-top: 0px;
    }
    .skill > .icon {
        height: 16px;
        width: 16px;
        fill: var(--color-slate-300);
    }
</style>
