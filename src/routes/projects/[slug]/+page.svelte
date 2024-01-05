<script lang="ts">
	import { assets, base } from "$app/paths";
	import projects from "../../../data/projects.json";

	let baseUrl = "https://joshuajenner.dev";
	
	export let data;

	let project = projects.find((element) => element.slug == data.slug);

	console.log(project);

</script>

<svelte:head>
	<!-- <title>{data.}</title> -->
	<!-- <meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:image" content="{baseUrl}{data.meta.hero}">
	<meta property="og:url" content="{baseUrl}/blog/{data.slug}">
	<meta property="og:description" content={data.meta.description}> -->

	<meta name="twitter:card" content=”summary_large_image”>
	<meta name="twitter:site" content="@joshuajennerdev">
	<meta name="twitter:creator" content="@joshuajennerdev">
</svelte:head>


<div class="page">
	{#if project == null}
		<h1> Project not found!</h1>
	{:else}
		<h1>{project.title}</h1>
		<img alt="" src={assets}{project.image} />
	{/if}

	<div class="back">
		<a href="{base}/blog">
			<h4>Back to Blog</h4>
		</a>
	</div>
</div>

<style>
	.page {
		margin-top: 2rem;
	}

	.back {
		flex-grow: 1;
		display: flex;
		align-items: end;
		justify-content: end;
		margin-top: 6rem;
	}
	.back a {
		display: block;
		background-color: var(--main-highlight);
		padding: 1rem 1.5rem;
	}
	.back a:hover {
		background-color: var(--light-highlight);
	}
	.back a h4 {
		margin: 0px;
		color: white;
	}
</style>
