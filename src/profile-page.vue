<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container border">
            <h1>test</h1>
        </div>
    </div>
</template>

<script>
import navBar from './components/main-page/nav-bar.vue';
export default{
    components:{
        navBar
    }

}
</script>

<style scoped>
@media screen and (min-width: 1200px){
    .container{
        width: 935px;
    }
}
</style>