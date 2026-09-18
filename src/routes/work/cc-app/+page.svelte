<script lang="ts">
    import Workpage from "$lib/components/workpage.svelte";
    import ccappimage from "$lib/images/cc_app/Scenario_1_003.jpg";
    import Discussion from "$lib/images/cc_app/Discussion.jpg";
    import Feedback from "$lib/images/cc_app/Feedback.jpg";
    import GameRooms from "$lib/images/cc_app/Game Rooms.jpg";
    import Lobby from "$lib/images/cc_app/Lobby.jpg";
    import Question from "$lib/images/cc_app/Question.jpg";
    import Tutorial from "$lib/images/cc_app/Tutorial.jpg";
</script>

<Workpage title="CareConnect QESS" image={ccappimage} screenshots={[Tutorial, GameRooms, Lobby, Question, Discussion, Feedback]} skills={["Unity", "C#", "Firebase"]}>
    <p>
        This is an online multiplayer quiz app that has launched on <a class="workpage-link" href="https://play.google.com/store/apps/details?id=com.hkmu.qess" target="_blank">Google Play</a>. 
        Students would be able join or create rooms to play together. In the room lobby, they would select which role they
        wanted to play. When the quiz has started, the students would watch 3D animations of medical scenarios. They would then discuss with each other, and answers questions based on what they saw.
    </p>
    <br />
    <p>
        This app was created in partnership with local universities in Hong Kong. I participated in client meetings to discuss the scope of the project. The client provided UI mockups, quiz content,
        and official logos. My coworkers provided the 3D models. I developed the functionality of the app. Some notable functionality includes: authentication, account customization, a chat function.
    </p>
</Workpage>
