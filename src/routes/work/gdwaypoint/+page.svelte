<script lang="ts">
    import Workpage from "$lib/components/workpage.svelte";
    import main from "$lib/images/gdwaypoint/home.png";
    import publisher from "$lib/images/gdwaypoint/publisher.png";
    import publishers from "$lib/images/gdwaypoint/publishers.png";
    import admin_view from "$lib/images/gdwaypoint/admin_view.png";
    import admin_edit from "$lib/images/gdwaypoint/admin_edit.png";
</script>

<Workpage title="Gamedev Waypoint" image={main} screenshots={[publishers, publisher, admin_view, admin_edit]} skills={["Svelte", "SvelteKit", "Supabase", "PostgreSQL"]}>
    <p>
        This is a website for game developers to find publishers. It is work in progress but is available for 
        <a class="workpage-link" href="https://www.gdwaypoint.com/" target="_blank">use now</a>. 
        It lists, and provides detailed information about publishers for game developers.
    </p>
    <br />
    <p>
        I also developed an admin panel to make editing the publishers faster.
    </p>
</Workpage>
