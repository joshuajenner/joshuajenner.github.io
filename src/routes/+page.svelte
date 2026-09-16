<script lang="ts">
    import CCApp from "$lib/images/Scenario_1_003.jpg";
    import CCDash from "$lib/images/cc_dashboard_001.png";
    import Skill from "$lib/components/skill.svelte";

    interface Work {
        title: string;
        image: string;
        skills: string[];
        description: string;
        points: string[];
    }

    const works: Work[] = [
        {
            title: "CareConnect Dashboard",
            image: CCDash,
            skills: ["React", "MUI", "Firebase"],
            description: "Dashboard For Teachers",
            points: ["Developed and launched to university professors in Hong Kong."],
        },
        {
            title: "CareConnect QESS",
            image: CCApp,
            skills: ["Unity", "C#", "Firebase"],
            description: "Online Multiplayer Quiz Mobile App",
            points: ["Developed and launched to university students in Hong Kong."],
        },
    ];
</script>

<div class="page">
    <div class="py-20 text-right">
        <h1 class="font-[ArealMono] font-bold italic text-4xl">Joshua Jenner</h1>
        <p class="mt-2 text-xl">Software Engineer</p>
    </div>

    <div class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <h2>About</h2>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <p>A skilled and versatile software engineer with a focus on full-stack web development.</p>
    </div>

    <div class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <h2>Frontend</h2>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div class="skills">
            <Skill id="React" />
            <Skill id="Vue" />
            <Skill id="Svelte" />
            <Skill id="Typescript" />
            <Skill id="Javascript" />
            <Skill id="Tailwind CSS" />
            <Skill id="MUI" />
        </div>
    </div>

    <div class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <h2>Backend</h2>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div class="skills">
            <Skill id="Next.js" />
            <Skill id="Nuxt" />
            <Skill id="SvelteKit" />
            <Skill id="PostgreSQL" />
            <Skill id="MySQL" />
            <Skill id="MongoDB" />
            <Skill id="Node.js" />
        </div>
    </div>

    <div class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <h2>Work</h2>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div class="works">
            {#each works as work}
                <div class="work">
                    <div class="image-box">
                        <img src={work.image} alt="" />
                    </div>
                    <div class="content">
                        <p class="title text-3xl">{work.title}</p>
                        <div class="skills">
                            {#each work.skills as skill}
                                <Skill id={skill} />
                            {/each}
                        </div>
                        <p>{work.description}</p>
                        <ul class="list-disc list-inside">
                            {#each work.points as point}
                                <li>{point}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .works {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .work {
        display: grid;
        gap: 16px;
    }
    .work .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .work .image-box {
        height: 300px;
        border: 2px solid var(--color-slate-800);
        border-radius: 8px;
        overflow: hidden;
    }
    .work img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 0%;
    }

    @media screen and (min-width: 800px) {
        .work {
            grid-template-columns: 1fr 1.5fr;
        }
        .work .image-box {
            height: 250px;
        }
    }
</style>
