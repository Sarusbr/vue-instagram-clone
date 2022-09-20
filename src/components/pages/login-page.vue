<template>
    <div class="center" style="width:100%;height:100vh;">
        <login-box></login-box>
    </div>
</template>

<script>
import loginBox from "../tools/loginBox.vue";
export default {
    components:{
        loginBox
    }
}
</script>

<style>
.center{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>