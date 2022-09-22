<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container main-container align-items-start center d-flex gap-3">
            <story-bar></story-bar>
            <recomended-box v-if="this.$store.state.screenWidth > 800"></recomended-box>
        </div>
    </div>
</template>

<script>
import navBar from "./components/main-page/nav-bar.vue";
import storyBar from "./components/main-page/story-bar.vue";
import recomendedBox from "./components/main-page/recommended-box.vue";

export default {
    components:{
        navBar,
        storyBar,
        recomendedBox
    }
}
</script>

<style scoped>
@media screen and (min-width: 1200px){
    .main-container{
        width: 1000px;
    }
}
</style>