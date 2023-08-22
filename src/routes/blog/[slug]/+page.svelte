<script lang="ts">
	import { assets, base } from "$app/paths";
	export let data;
	console.log(data);
</script>

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

	<svelte:component this={data.content} />
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
	}
</style>
