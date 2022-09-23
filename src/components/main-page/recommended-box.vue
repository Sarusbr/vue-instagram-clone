<template>
    <div class="m-3 rounded recomendedBox">
        <div class="my-rec-profile mt-3 reco-my d-flex w-100 align-items-center">
            <img :src="this.$store.state.data[0].result.profilePhoto" class="my-rec-profile-img rounded-circle" alt="">
            <div class="d-flex flex-column reco-this-user">
                <span class="font1 f-bold pl1">{{this.$store.state.data[0].result.username}}</span>
                <span class="font1 f-bold pl1 text-muted">{{this.$store.state.data[0].result.name}}</span>
            </div>
        </div>
        <div class="recomendeds">
            <div class="d-flex">
                <span class="text-muted font2 d-flex p-2 w-60 myfont1">Senin için önerilenler</span>
                <span class="font1 crs-pointer d-flex w-40 justify-content-end myfont2 p-2">Tümünü gör</span>
            </div>
            <rec-one v-for="item in this.$store.state.data[1].resultAllUsers.slice(0,5)" :data="item" :key="item"></rec-one>
        </div>
    </div>
</template>

<script>
import recOne from "./recommend-one.vue"
export default {
    components:{
        recOne
    }
}
</script>

<style scoped>
.pl1{
    padding-left: 15px;
}
.my-rec-profile-img{
    width: 56px;
    height: 56px;
}
.myfont1{
    font-size: 14px;
}
.myfont2{
    font-size: 12px;
}
.reco-my{
    width: 400px;
    height: 56px;
}
.reco-this-user{
    width: 198px;
    height: 30px;
}
.trackbtn{
    width: 180px;
    padding: 0px;
}
.my-rec-profile-img-2{
    width: 40px;
    height: 40px;
    margin-right: 20px;
}
.recomendedBox{
    width: 500px;
    height: 500px;
    padding: 0px;
    margin: 0px;
}
</style>