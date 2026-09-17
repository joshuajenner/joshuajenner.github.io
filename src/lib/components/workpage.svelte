<script lang="ts">
    import type { Snippet } from "svelte";
    import Skill from "./skill.svelte";

    interface Props {
        title: string;
        image: string;
        skills: string[];
        screenshots: string[];
        children: Snippet;
    }

    let { title, image, skills, screenshots, children }: Props = $props();
</script>

<div class="page pt-8 pb-16 flex flex-col gap-8">
    <img src={image} alt="" class="rounded-lg" />
    <h1 class="text-4xl">{title}</h1>
    <div>
        <div class="flex items-center gap-2 mb-2">
            <p class="small-title">Skills</p>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div class="flex flex-wrap gap-2">
            {#each skills as skill}
                <Skill id={skill} />
            {/each}
        </div>
    </div>
    <div>
        <div class="flex items-center gap-2 mb-2">
            <p class="small-title">Description</p>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div>
            {@render children()}
        </div>
    </div>
    <div>
        <div class="flex items-center gap-2 mb-2">
            <p class="small-title">Screenshots</p>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div class="grid gap-2 grid-cols-1 md:grid-cols-2">
            {#each screenshots as screenshot}
                <img class="rounded-lg" src={screenshot} alt="" />
            {/each}
        </div>
    </div>
    <a class="main-button self-end" href="/">
        <p>Back</p>
    </a>
</div>
