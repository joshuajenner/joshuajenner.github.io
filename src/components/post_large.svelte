<script lang="ts">
	import { assets, base } from "$app/paths";

	export let title: string;
	export let thumbnail: string;
	export let date: string;
	export let slug: string;
</script>

<div class="post_large">
	<div class="thumbnail">
		<a href="{base}/blog/{slug}">
			<img alt="" src="{assets}{thumbnail}" />
		</a>
	</div>
	<div class="info">
		<div class="title">
			<a href="{base}/blog/{slug}">
				<h2>{title}</h2>
			</a>
		</div>
		<div class="date">
			<p>{date}</p>
		</div>
		<div class="read">
			<a href="{base}/blog/{slug}">
				<h4>View</h4>
			</a>
		</div>
	</div>
</div>

<style>
	.post_large {
		display: flex;
		flex-direction: column;
	}
	.title h2 {
		font-size: 32px;
		margin: 1rem 0px;
	}
	.title h2:hover {
		text-decoration: underline;
	}

	.date p {
		margin: 0px;
		font-size: 0.9rem;
		color: var(--text-light);
	}
	.thumbnail img {
		width: 100%;
		height: auto;
	}
	.read {
		flex-grow: 1;
		display: flex;
		align-items: end;
		justify-content: end;
	}
	.read a {
		display: block;
		background-color: var(--highlight-main);
		padding: 1rem 1.5rem;
	}
	.read a:hover {
		background-color: var(--highlight-hover);
	}
	.read a h4 {
		margin: 0px;
		color: white;
	}

	@media (min-width: 900px) {
		.post_large {
			display: grid;
			grid-gap: 1rem;
			grid-template-columns: 400px 1fr;
		}
		.thumbnail {
			width: 400px;
		}
		.title h2 {
			margin-top: 0px;
		}
		.info {
			display: flex;
			flex-direction: column;
		}
	}
</style>
