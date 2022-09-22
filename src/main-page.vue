<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container main-container align-items-start center d-flex gap-3">
            <div style="width:470px;margin-right:32px">
                <story-bar></story-bar>
            </div>
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
        width: 821px;
        margin-top: 10px;
        padding: 0px;
    }
}
</style>