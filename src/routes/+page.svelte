<script lang="ts">
    import CCApp from "$lib/images/cc_app/Scenario_1_003.jpg";
    import CCDash from "$lib/images/cc_dash/cc_dashboard_001.png";
    import Skill from "$lib/components/skill.svelte";

    interface Work {
        title: string;
        image: string;
        skills: string[];
        description: string;
        points: string[];
        playstore: string;
        readmore: string;
    }

    const works: Work[] = [
        {
            title: "CareConnect Dashboard",
            image: CCDash,
            skills: ["React", "MUI", "Firebase"],
            description: "Dashboard For Professors",
            points: [
                "Developed for university professors in Hong Kong.",
                "View active rooms, and students' answers.",
                "Manage rooms, and students.",
                "View reports on students' activity.",
            ],
            playstore: "",
            readmore: "/work/cc-dashboard",
        },
        {
            title: "QESS CareConnect",
            image: CCApp,
            skills: ["Unity", "C#", "Firebase"],
            description: "Online Multiplayer Quiz Mobile App",
            points: ["Developed for university students in Hong Kong.", "Create and join private or public rooms.", "Chat and vote about questions.", "View summaries and reports after the session."],
            playstore: "https://play.google.com/store/apps/details?id=com.hkmu.qess",
            readmore: "/work/cc-app",
        },
    ];
</script>

<div class="page">
    <div class="py-20 text-right">
        <h1 class="text-4xl">Joshua Jenner</h1>
        <p class="mt-2 text-xl">Software Engineer</p>
    </div>

    <div class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <p class="small-title">About</p>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <p>A skilled and versatile software engineer with a focus on full-stack web development.</p>
        <p>I have multiple years of experience in developing responsive and performant web apps.</p>
    </div>

    <div class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <p class="small-title">Frontend</p>
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
            <p class="small-title">Backend</p>
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
            <p class="small-title">Work</p>
            <div class="bg-slate-800 h-0.5 w-full"></div>
        </div>
        <div class="works">
            {#each works as work}
                <div class="work relative">
                    <a href={work.readmore} class="image-box hover:border-2 hover:border-sky-600">
                        <img src={work.image} alt="" />
                    </a>
                    <div class="content">
                        <a href={work.readmore} class="hover:underline">
                            <h1 class="text-3xl">{work.title}</h1>
                        </a>
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
                        <div class="flex gap-2">
                            <a class="main-button text-sm" href={work.readmore}>
                                <p>Read More</p>
                            </a>
                            {#if work.playstore !== ""}
                                <a class="main-button text-sm" href={work.playstore} target="_blank">
                                    <p>Google Play</p>
                                </a>
                            {/if}
                        </div>
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
        gap: 40px;
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
        border-radius: 8px;
        overflow: hidden;
    }
    .work img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 0%;
    }

    @media screen and (min-width: 48rem) {
        .works {
            gap: 16px;
        }
        .work {
            grid-template-columns: 1fr 1.5fr;
        }
        .work .image-box {
            height: 250px;
        }
    }
</style>
