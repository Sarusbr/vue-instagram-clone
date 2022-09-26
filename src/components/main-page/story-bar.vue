<template>
    <div class="container d-flex align-items-center story-limit rounded mt-3 bg-white border"
    :style="this.$store.state.screenWidth < 500 ? 'width:'+this.$store.state.screenWidth+'px':''"
    >
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
@media screen and (min-width: 500px) {
    .container {
        width: 470px;
        height: 119px;
        margin: 0px;
        padding: 0px;
    }
}
</style>