<template>
    <div class="mt-3 post-box">
        <post-one v-for="item in this.$store.state.data[2].resultAllPosts" :key="item._id" :post="item"></post-one>  
    </div>
</template>

<script>
import postOne from './post-one.vue';
export default {
    components:{
        postOne
    }
}
</script>

<style scoped>
</style>