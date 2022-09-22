<template>
    <div class="container d-flex align-items-center story-limit rounded m-3 bg-white border">
        <one-story v-for="item in list" :key="item" :username="item"></one-story>
    </div>
</template>

<script>
import oneStory from "./one-story.vue";
export default {
    data(){
        return{
            list:[
                "jeffbezos",
                "apple",
                "donanimarsivi",
                "google",
                "ilberortayli",
                "jeffbezos",
                "kodluyoruz",
                "microsoft",
                "nasa",
                "thisisbillgates",
                "webtekno",
                "zuck"
            ]
        }
    },
    components:{
        oneStory
    }
}
</script>

<style scoped>
.story-limit{
    height: 100px;
    overflow: hidden;
}
@media screen and (min-width: 470px) {
    .container {
        width: 470px;
        height: 119px;
        margin: 0px;
        padding: 0px;
    }
}
</style>