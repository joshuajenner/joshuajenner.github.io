<script lang="ts">
	import { assets, base } from "$app/paths";

	export let data;
</script>

<svelte:head>
	<!-- <title>{data.}</title> -->
	<!-- <meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:image" content="{baseUrl}{data.meta.hero}">
	<meta property="og:url" content="{baseUrl}/blog/{data.slug}">
	<meta property="og:description" content={data.meta.description}> -->

	<meta name="twitter:card" content="”summary_large_image”" />
	<meta name="twitter:site" content="@joshuajennerdev" />
	<meta name="twitter:creator" content="@joshuajennerdev" />
</svelte:head>

<div class="page">
	{#if data.content == null}
		<h1>Project not found!</h1>
	{:else}
		<img id="hero" alt="" src="{assets}{data.meta.image}" />
		<h1>{data.meta.title}</h1>
		<div class="tags">
			{#each data.meta.tags as tag}
				<div class="tag {tag.replace(".", "_")}">{tag}</div>
			{/each}
		</div>
		<div class="section_title">
			<h2>Info</h2>
			<hr class="section_rule" />
		</div>
		<div class="content">
			<svelte:component this={data.content} />
		</div>
	{/if}

	<div class="back">
		<a href="{base}/">
			<h4>Back Home</h4>
		</a>
	</div>
</div>

<style>
	.page {
		margin-top: 2rem;
	}
	.content {
		line-height: 1.5rem;
	}
	#hero {
		width: 100%;
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
		background-color: var(--highlight-main);
		padding: 1rem 1.5rem;
	}
	.back a:hover {
		background-color: var(--highlight-hover);
	}
	.back a h4 {
		margin: 0px;
		color: white;
	}

	.tags {
		display: flex;
		grid-gap: 0.5rem;
	}
	.tag {
		font-size: 100%;
		padding: 6px 10px;
	}
	.section_split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}
</style>
