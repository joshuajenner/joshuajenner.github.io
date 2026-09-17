<script lang="ts">
    import Workpage from "$lib/components/workpage.svelte";
    import main from "$lib/images/cc_dash/cc_dashboard_001.png"
    import bulkstudents from "$lib/images/cc_dash/BulkStudents.png";
    import classwithgroup from "$lib/images/cc_dash/Class with Group.png";
    import groupdetail from "$lib/images/cc_dash/Group Detail.png";
    import students from "$lib/images/cc_dash/Students.png";
</script>

<Workpage title="CareConnect Dashboard" image={main} screenshots={[classwithgroup, groupdetail, students, bulkstudents]} skills={["React", "Next.js", "MUI", "Firebase"]}>
    <p>
        This is a dashboard for professors to manage student usage of the QESS CareConnect app.
        Professors would be able to create classes, and create groups within them. 
        The classes would have a set time, and students would only be able to join their assigned room at the correct time.
        When the room has started, the professor would be able to monitor the chat and answers of the students.
        Professors could also manage their students by assigning cohorts and bulk creating accounts for them.
        They could also view the overall peformance of the cohort in charts.
    </p>
    <br />
    <p>
        This app was created in partnership with local universities in Hong Kong. 
        I participated in client meetings to discuss the scope of the project.
        The client provided UI mockups and descriptions about required functionality.
        I developed the functionality of the app. 
        Some notable functionality includes: authentication, account customization, user management, viewing charts.
    </p>
</Workpage>
