<template>
    <div class="m-3 rounded recomendedBox">
        <div class="my-rec-profile mt-3 d-flex w-100 align-items-center">
            <img src="@/assets/test-story.png" class="my-rec-profile-img rounded-circle" alt="">
            <div class="d-flex flex-column">
                <span class="font3">{{this.$store.state.username}}</span>
                <span class="font2 text-muted">{{this.$store.state.name}}</span>
            </div>
        </div>
        <div class="recomendeds">
            <div class="d-flex">
                <span class="text-muted font2 d-flex p-2 w-60">Senin için önerilenler</span>
                <span class="font1 crs-pointer d-flex w-40 justify-content-end p-2">Tümünü gör</span>
            </div>
            <rec-one v-for="item in 5" :key="item"></rec-one>
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
.my-rec-profile-img{
    width: 65px;
    height: 65px;
    margin: 10px;
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
.my-rec-profile{
    height: 80px;
}
.recomendedBox{
    width: 400px;
    height: 500px;
}
</style>