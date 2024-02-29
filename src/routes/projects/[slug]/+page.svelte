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
			<div class="tag">{data.meta.date}</div>
			<div class="tag">{data.meta.type}</div>
		</div>
		<div class="section_split">
			<div class="section">
				<div class="section_title">
					<h2>Tech</h2>
					<hr class="section_rule" />
				</div>
				{#each data.meta.tech as tech}
					<p>{tech}</p>
				{/each}
			</div>
			<div class="section">
				<div class="section_title">
					<h2>Skills</h2>
					<hr class="section_rule" />
				</div>
				{#each data.meta.skills as skill}
					<p>{skill}</p>
				{/each}
			</div>
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
		<a href={"/"}>
			<h4>Back Home</h4>
		</a>
	</div>
</div>

<style>
	.page {
		margin-top: 2rem;
	}
	p {
		margin: 0.5rem 0px;
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

	.tags {
		display: flex;
		grid-gap: 0.5rem;
	}
	.tag {
		background-color: #e2e8f0;
		padding: 0.25rem 0.5rem;
		color: #475569;
	}
	.section_split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}
</style>
