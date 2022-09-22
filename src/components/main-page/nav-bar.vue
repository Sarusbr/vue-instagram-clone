<template>
    <div class="navbar navbar-light bg-white border-bottom">
        <div class="container d-flex justify-content-between">
            <img src="@/assets/logo.png" alt="">
            <input type="text"  class="form-control w-25" v-if="screenWidth > 650" placeholder="Ara">
            <div class="d-flex" :class="screenWidth > 850? 'gap-4':screenWidth > 400 ? 'gap-3':'gap-1'">
                <iconVue name="home"></iconVue>
                <iconVue name="dm"></iconVue>
                <iconVue name="add"></iconVue>
                <iconVue name="explore"></iconVue>
                <iconVue name="likes"></iconVue>
            </div>
        </div>
    </div>    
</template>

<script>
import iconVue from "../tools/vue-icons.vue";
export default {
    data(){
        return{
            screenWidth:0
        }
    },
    components:{
        iconVue
    },
    created(){
        setInterval(()=>{
            this.screenWidth = document.body.offsetWidth;
        },10)
    }
}
</script>

<style>

</style>