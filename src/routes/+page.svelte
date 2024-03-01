<script lang="ts">
	import ProjectItem from "../components/project_item.svelte";
	import projects from "../data/projects.json";
</script>

<main class="page">
	<div id="hero_banner">
		<h1 id="hero_title">JOSHUA JENNER</h1>
		<p>Software Developer</p>
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
</main>

<style>
	.projects_box {
		display: grid;
		grid-gap: 2rem;
	}
</style>
