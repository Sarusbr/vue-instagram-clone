<template>
    <div class="my-rec-profile d-flex justify-content-between w-100 align-items-center">
        <img src="@/assets/test-story.png" class="my-rec-profile-img-2 rounded-circle" alt="">
        <div class="d-flex flex-column w-100">
            <span class="font3">{{this.$store.state.username}}</span>
            <span class="font2 text-muted">{{this.$store.state.name}}</span>
        </div>
        <div class="btn text-primary btn-sm trackbtn">Takip Et</div>
    </div>
</template>

<style scoped>
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
    height: 60px;
}
</style>