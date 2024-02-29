<script lang="ts">
	// import { assets, base } from "$app/paths";

	import ProjectItem from "../components/project_item.svelte";
	// import PostMini from "../components/post_mini.svelte";

	import projects from "../data/projects.json";

	// export let data;
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

	<!-- <div class="section_title">
		<h1>BLOG</h1>
		<hr class="section_rule" />
	</div>
	<div class="posts_box">
		{#each data.posts as post, i}
			<PostMini {...post} />
		{/each}
	</div>
	<div class="posts_button">
		<a href="{base}/blog">
			<h4>View All</h4>
		</a>
	</div> -->
</main>

<style>
	.projects_box {
		display: grid;
		grid-gap: 2rem;
	}
	/* .posts_box {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	} */

	/* .posts_button {
		flex-grow: 1;
		display: flex;
		align-items: end;
		justify-content: end;
		margin-top: 6rem;
	}
	.posts_button a {
		display: block;
		background-color: var(--main-highlight);
		padding: 1rem 1.5rem;
	}
	.posts_button a:hover {
		background-color: var(--light-highlight);
	}
	.posts_button a h4 {
		margin: 0px;
		color: white;
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
	} */
</style>
