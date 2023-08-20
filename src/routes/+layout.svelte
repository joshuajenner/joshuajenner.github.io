<script>
	import { base } from "$app/paths";
</script>

<nav>
	<ul>
		<li><a href={base} id="nav_title">JJ<span>D</span></a></li>
		<div id="socials">
			<li><a href="https://www.youtube.com/channel/UCyizGS2XtfLldHkQwF0NC1w"><img alt="" class="dark" src="/static/icons/ytd.png" /><img alt="" class="light" src="/static/icons/ytl.png" /></a></li>
			<li><a href="https://twitter.com/joshuajennerdev"><img alt="" class="dark" src="/static/icons/twd.png" /><img alt="" class="light" src="/static/icons/twl.png" /></a></li>
			<li><a href="https://www.twitch.tv/joshuajennerdev"><img alt="" class="dark" src="/static/icons/ttvd.png" /><img alt="" class="light" src="/static/icons/ttvl.png" /></a></li>
		</div>
	</ul>
</nav>

<slot />
