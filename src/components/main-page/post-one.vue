<template>
    <div class="bg-white border rounded">
        <div class="clearfix post-header border-bottom rounded-top">
            <div class="center"><img :src="post.profilePhoto" class="rounded-circle post-prof-size" alt=""></div>
            <div class="font1 align-items-center d-flex f-bold ml-2">{{post.username}}</div>
            <div class="center"><icon-vue size="24" name="dots"></icon-vue></div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import iconVue from '../tools/vue-icons.vue';
export default {
    props:["post"],
    components:{
        iconVue
    }
}
</script>

<style scoped>
.post-prof-size{
    width: 32px;
    height: 32px;
}
.post-header{
    display: grid;
    grid-template-columns: 56px 1fr 56px;
    grid-template-rows: 56px;
}
</style>