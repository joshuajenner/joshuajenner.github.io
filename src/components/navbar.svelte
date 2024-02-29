<script>
	import { base } from "$app/paths";
</script>

<nav>
	<ul class="page">
		<li><a href="{base}/" id="nav_title">JJ<span>D</span></a></li>
		<div id="socials">
			<!-- <li>
				 Youtube
				<a href="https://www.youtube.com/channel/UCyizGS2XtfLldHkQwF0NC1w">
					<svg viewBox="0 0 159 110" xmlns="http://www.w3.org/2000/svg"
						><path
							class="svg_fill"
							d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z"
						/><path d="m105 55-40.8-23.4v46.8z" fill="#fff" /></svg
					>
				</a>
			</li>
			<li>
				 Twitter
				<a href="https://twitter.com/joshuajennerdev">
					<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204">
						<path
							class="svg_fill"
							d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
						/>
					</svg>
				</a>
			</li> -->
			<li>
				<!-- Linkedin -->
				<a href="https://www.linkedin.com/in/joshuajennerdev/">
					<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"
						><g fill="none" fill-rule="evenodd"
							><path
								class="linkedin_svg"
								d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
							/><path
								d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
								fill="#FFF"
							/></g
						></svg
					>
				</a>
			</li>
		</div>
	</ul>
</nav>

<style>
	nav {
		background-color: var(--highlight-main);
		border-bottom: 1px solid rgb(0, 0, 0);
	}

	#nav_title {
		color: var(--text-light);
		font-family: input-mono, monospace;
		font-weight: 800;
		font-style: italic;
		font-size: 20px;
	}

	#nav_title span {
		color: var(--gold);
	}

	#nav_title:hover span {
		color: var(--gold-hover);
	}

	nav ul {
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}

	nav ul a {
		color: var(--text-light);
	}

	#socials {
		display: flex;
	}

	#socials li {
		margin-left: 10px;
		height: 16px;
		width: auto;
	}

	li svg {
		height: 100%;
		width: auto;
	}
	.linkedin_svg {
		fill: #0a66c2;
	}
	svg:hover .linkedin_svg {
		fill: #1074d7;
	}
</style>
