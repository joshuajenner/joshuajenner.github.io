<script lang="ts">
	export let title: string;
	export let image: string;
	export let tags: Array<string>;;
	export let links: Array<string>;
	export let points: Array<string>;

	import { assets, base } from "$app/paths";
</script>

<div class="project_item">
	<div class="img">
		<img alt="" src="{assets}{image}" />
	</div>
	<div class="info">
		<div>
			<div class="top">
				<div class="title">
					<h1>{title}</h1>
				</div>
			</div>
			<div class="tags">
				{#each tags as tag, i}
					<div class="tag {tag.replace(".", "_")}">{tag}</div>
				{/each}
			</div>
			<div class="points">
				<ul>
					{#each points as point, i}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="links">
			{#each links as link, i}
				{#if link.includes("github")}
					<a href={link} target="_blank">
						<svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"
							><path
								class="svg_white"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
							/></svg
						>
						<h5>Code</h5>
					</a>
				{:else if link.includes("https://")}
				<a href="{link}" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							class="svg_white"
							d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"
						/>
					</svg>
					<h5>Demo</h5>
				</a>
				{:else}
					<a href="{base}{link}">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								class="svg_white"
								d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"
							/>
						</svg>
						<h5>Info</h5>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 32px;
		margin: 0px;
	}
	.tags {
		display: flex;
		grid-gap: 0.5rem;
		margin: 8px 0px;
	}
	/* .release p {
		margin-top: 0.5rem;
		color: var(--text-light);
	} */
	.img img {
		width: 100%;
	}
	.info {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr 50px;
	}
	.top {
		height: 48px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.links {
		height: 50px;
		display: flex;
		justify-content: end;
		align-items: center;
		grid-gap: 8px;
		flex-grow: 1;
	}
	.links a {
		display: flex;
		align-items: center;
		grid-gap: 8px;
		background-color: var(--highlight-main);
		padding: 0.5rem 0.75rem;
		width: auto;
	}
	.links a:hover {
		background-color: var(--highlight-hover);
	}
	.links a h5 {
		margin: 1px 0px 0px;
		color: white;
	}
	.links a svg {
		height: 16px;
		width: auto;
	}

	@media (min-width: 900px) {
		.project_item {
			display: grid;
			grid-template-columns: 300px 1fr;
			grid-gap: 1rem;
		}
		.img {
			width: 300px;
		}
	}
</style>
