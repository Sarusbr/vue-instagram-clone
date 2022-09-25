<template>
    <div>
        <post-popup v-if="this.$store.state.popupStatus"></post-popup>
        <nav-bar></nav-bar>
        <div :style="this.$store.state.screenWidth > 730 ? 'gap:28px':'gap:2px'" class="exploreContainer mt-4 container center">
            <one-post :boxWidth="rowList" :data="item" v-for="item in this.$store.state.data[2].resultAllPosts" :key="item._id"></one-post>
        </div>        
    </div>
</template>

<script>
import navBar from './components/main-page/nav-bar.vue'
import onePost from './components/explore-page/one-post.vue'
import postPopup from './post-popup.vue'
export default {
    components:{
        navBar,
        postPopup,
        onePost
    },
    methods:{
    },  
    computed:{
        rowList(){
            /* console.log(this.$refs.contain.clientWidth); */
            return 22;
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 1200px){
    .container{
        width: 935px;
    }
}

@media screen and (max-width: 730px){
    .container{
        width: 100%;
        padding: 0px;
    }
}
.exploreRow{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 300px;
    gap: 28px;
}
.exploreContainer{
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
}
</style>