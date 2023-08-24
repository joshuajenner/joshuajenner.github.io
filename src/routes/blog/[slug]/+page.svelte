<script lang="ts">
	import "./page.css";
	import { assets, base } from "$app/paths";

	export let data;

	let baseUrl = "https://joshuajenner.dev";

</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:image" content="{baseUrl}{data.meta.hero}">
	<meta property="og:url" content="{baseUrl}/blog/{data.slug}">
	<meta property="og:description" content={data.meta.description}>

	<meta name="twitter:card" content=”summary_large_image”>
	<meta name="twitter:site" content="@joshuajennerdev">
	<meta name="twitter:creator" content="@joshuajennerdev">
</svelte:head>


<div class="page">
	<div class="hero">
		<img alt="" src="{assets}{data.meta.hero}" />
	</div>
	<div class="title">
		<h1>{data.meta.title}</h1>
	</div>
	<div class="date">
		<p>{data.meta.date}</p>
	</div>
	<hr class="section_rule" />
	<div class="post_content">
		<svelte:component this={data.content} />
	</div>

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
	.hero {
		width: 100%;
	}
	.hero img {
		width: 100%;
		height: auto;
	}
	.date p {
		font-size: 1.1rem;
		margin: 0px;
	}
	.section_rule {
		margin: 2rem 0px 4rem 0px;
	}
	.post_content {
		line-height: 1.45;
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
