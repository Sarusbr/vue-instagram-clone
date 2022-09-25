<template>
    <div>
        <post-popup v-if="this.$store.state.popupStatus"></post-popup>
        <nav-bar></nav-bar>
        <div class="container profileContainer">
            <div class="row profileHeight">
                <div class="col-md-4 center">
                    <img :src="this.$store.state.data[0].result.profilePhoto" class="profilePhoto rounded-circle" alt="">
                </div>
                <div  class="col-md-8 pt-2">
                    <div class="d-flex justufy-content-center align-items-center">
                        <span class="font6 prUsername">{{this.$store.state.data[0].result.username}}</span>
                        <div class="myEditButton f-bold1 crs-pointer">Profili Düzenle</div>
                    </div>
                    <br>
                    <div class="font3 d-flex gap-4">
                        <div>
                            <span class="f-bold1">{{this.$store.state.data[0].result.postsCount}}</span>
                            <span> gönderi</span>
                        </div>
                        <div>
                            <span class="f-bold1">{{this.$store.state.data[0].result.followersCount}}</span>
                            <span> takipçi</span>
                        </div>
                        <div>
                            <span class="f-bold1">{{this.$store.state.data[0].result.folowingCount}}</span>
                            <span> takip</span>
                        </div>
                    </div>
                    <br>
                    <div class="f-bold1">
                        {{this.$store.state.data[0].result.name}}
                    </div>
                    <div>
                        {{this.$store.state.data[0].result.bio}}
                    </div>
                </div>
            </div>
            <br><br>
            <hr class="p-0 m-0">
            <div style="height: 53px;gap:60px" class="center">
                <div class="myButtonProfile center f-bold1 font1">GÖNDERİLER</div>
                <div class="myButtonProfile center f-bold1 font1">KAYDEDİLENLER</div>
                <div class="myButtonProfile center f-bold1 font1">ETİKETLENENLER</div>
            </div>
            <div>
                <div :style="this.$store.state.screenWidth > 730 ? 'gap:28px':'gap:2px'" class="exploreContainer mt-4 container center">
                    <one-post :boxWidth="rowList" :data="item" v-for="item in this.$store.state.data[0].result.posts" :key="item._id"></one-post>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import navBar from './components/main-page/nav-bar.vue';
import onePost from './components/explore-page/one-post.vue'
import postPopup from './post-popup.vue'
export default{
    components:{
        navBar,
        postPopup,
        onePost
    }
}
</script>

<style scoped>
@media screen and (min-width: 1200px){
    .container{
        width: 935px;
    }
}
.myButtonProfile{
    border-top: 1px solid black;
    height: 100%;
    padding: 0px 10px;
}
.profilePhoto{
    height: 150px;
}
.exploreContainer{
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
}
.prUsername{
    font-weight: 300;
}
.myEditButton{
    font-size: 14px;
    width: 110px;
    height: 30px;
    display: inline-block;
    margin-left: 30px;
    margin-top: 0px;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profileContainer{
    margin-top: 30px;
}


</style>