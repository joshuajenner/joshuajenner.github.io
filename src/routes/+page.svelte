<script lang="ts">
	import { assets, base } from "$app/paths";

	import ProjectItem from "../components/project_item.svelte";
	import PostMini from "../components/post_mini.svelte";

	import projects from "../data/projects.json";

	export let data;
	console.log(data.posts);
</script>

<main class="page">
	<div id="hero_banner">
		<h1 id="hero_title">JOSHUA JENNER</h1>
		<p>Games Programmer</p>
	</div>

	<div class="section_title">
		<h1>PROJECTS</h1>
		<hr class="section_rule" />
	</div>
	<div class="projects_box">
		{#each projects as project, i}
			<ProjectItem {...project} />
		{/each}
	</div>

	<div class="section_title">
		<h1>BLOG</h1>
		<hr class="section_rule" />
	</div>
	<div class="posts_box">
		{#each data.posts as post, i}
			<PostMini {...post} />
		{/each}
	</div>
</main>

<style>
	.projects_box {
		display: grid;
		grid-gap: 2rem;
	}
	.posts_box {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}

	@media (min-width: 600px) {
		.posts_box {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 900px) {
		.posts_box {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
