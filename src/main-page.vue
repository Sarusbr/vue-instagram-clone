<template>
    <div>
        <post-popup v-if="this.$store.state.popupStatus"></post-popup>
        <nav-bar></nav-bar>
        <div class="container main-container align-items-start center d-flex gap-3">
            <div class="storypost-container" >
                <story-bar></story-bar>
                <post-box></post-box>
            </div>
            <recomended-box v-if="this.$store.state.screenWidth > 900"></recomended-box>
        </div>
    </div>
</template>

<script>
import navBar from "./components/main-page/nav-bar.vue";
import storyBar from "./components/main-page/story-bar.vue";
import recomendedBox from "./components/main-page/recommended-box.vue";
import postBox from "./components/main-page/post-box.vue";
import postPopup from './post-popup.vue'

export default {
    data(){
        return{
            popupStatus:false
        }
    },
    components:{
        navBar,
        storyBar,
        recomendedBox,
        postBox,
        postPopup
    },
    methods:{
        closePopup(){
            this.popupStatus=false;
        }
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

.storypost-container{
    width:470px;
}
</style>