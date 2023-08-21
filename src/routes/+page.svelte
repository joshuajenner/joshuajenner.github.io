<script>
	import ProjectItem from "../components/project_item.svelte"

	let projects = [
		{
			title: "Project: Speed",
			image: "/projects/speed.jpg",
			release: "In Development - PC",
			links: ["https://github.com/joshuajenner/project-speed"],
			points: ["Created a Jet character controller", "Implemented a tile-based procedurally generated world", "Uses multi-threading to increase performance"]
		},
		{
			title: "Kojum",
			image: "/projects/kojum.jpg",
			release: "2022 - PC",
			links: ["https://heartfiregames.itch.io/kojum", "https://github.com/joshuajenner/kojum"],
			points: ["Implemented a character controller, and state machine", "Designed and created a local multiplayer UI that handles up to 8 players"]
		}
	]
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
	
</main>

<style>
	.projects_box {
		display: grid;
		grid-gap: 2rem;
	}
</style>
