<script lang="ts">
	import PostLarge from "../../components/post_large.svelte";

	export let data;
</script>

<div class="page">
	<div class="section_title">
		<h1>BLOG</h1>
		<hr class="section_rule" />
	</div>

	<div class="posts_box">
		{#each data.posts as post}
			<PostLarge {...post} />
		{/each}
	</div>
</div>

<style>
	.posts_box {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}
</style>
