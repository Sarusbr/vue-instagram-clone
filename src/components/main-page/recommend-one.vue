<template>
    <div class="my-rec-profile d-flex justify-content-between w-100 align-items-center">
        <img :src="data.profilePhoto" class="my-rec-profile-img-2 rounded-circle" alt="">
        <div class="d-flex flex-column w-100">
            <span class="myfont1">{{data.username}}</span>
            <span class="myfont2 text-muted">{{data.name}}</span>
        </div>
        <span class="trackbtn text-primary crs-pointer myfont2 d-flex justify-content-end">Takip Et</span>
    </div>
</template>

<script>
export default {
    props:["data"],
    created(){
        console.log(this.data.profilePhoto);
    }
}
</script>

<style scoped>
.trackbtn{
    width: 180px;
    padding-right: 4px;
}
.my-rec-profile-img-2{
    width: 32px;
    height: 32px;
    margin-right: 20px;
}
.my-rec-profile{
    height: 48px;
}
.myfont2{
    font-size: 12px;
}
.myfont1{
    font-size: 14px;
}
</style>