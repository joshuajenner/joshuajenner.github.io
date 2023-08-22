<script lang="ts">
	export let link: string;
</script>

<div class="youtube_video">
	<iframe title="" src={link} />
</div>

<style>
	.youtube_video {
		padding-bottom: 56.25%;
		position: relative;
	}
	.youtube_video iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0px;
	}
</style>
