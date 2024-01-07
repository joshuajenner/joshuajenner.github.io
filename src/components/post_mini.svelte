<script lang="ts">
	import { assets, base } from "$app/paths";

	export let title: string;
	export let thumbnail: string;
	export let date: string;
	export let slug: string;
</script>

<div class="post_mini">
	<div class="info">
		<div class="thumbnail">
			<a href="{base}/blog/{slug}">
				<img alt="" src="{assets}{thumbnail}" />
			</a>
		</div>
		<div class="title">
			<a href="{base}/blog/{slug}">
				<h3>{title}</h3>
			</a>
		</div>
		<div class="date">
			<p>{date}</p>
		</div>
	</div>

	<div class="read">
		<a href="{base}/blog/{slug}">
			<h5>View</h5>
		</a>
	</div>
</div>

<style>
	.post_mini {
		display: flex;
		flex-direction: column;
	}
	.date {
		font-size: 0.9rem;
		color: var(--text-light);
	}
	.thumbnail img {
		width: 100%;
		height: auto;
	}
	.title h3:hover {
		text-decoration: underline;
	}
	.read {
		flex-grow: 1;
		display: flex;
		align-items: end;
		justify-content: end;
	}
	.read a {
		display: block;
		background-color: var(--main-highlight);
		padding: 0.75rem 1rem;
	}
	.read a:hover {
		background-color: var(--light-highlight);
	}
	.read a h5 {
		margin: 0px;
		color: white;
	}
</style>
