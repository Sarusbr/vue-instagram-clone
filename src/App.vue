<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
      setInterval(()=>{
          this.$store.state.screenWidth = document.body.offsetWidth;
      },10)
  }
}
</script>

<style>
body{
  background-color: #fafbfb;
}
</style>
