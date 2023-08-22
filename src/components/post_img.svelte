<script lang="ts">
	import { assets } from "$app/paths";

	export let path: string;
</script>

<div class="post_image">
	<img alt="" src="{assets}{path}" />
</div>

<style>
	.post_image {
		display: flex;
		justify-content: center;
	}
	.post_image img {
		max-width: 600px;
		width: 100%;
		height: auto;
	}
</style>
