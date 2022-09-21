<template>
    <div class="center border p-3 registerBox">
        <span>Hesabın var mı?</span>
        <span class="mx-2 fw-bold crs-pointer text-primary" @click="singUp">Giriş yap</span>
    </div>
</template>

<script>
export default {
    methods:{
        singUp(){
            this.$router.push("/")
        }
    }
}
</script>

<style>
.registerBox{
    width: 350px;
    background-color: white;
    box-shadow: 0px 0px 0.5px black;
}
@media screen and (max-width: 400px) {
    .registerBox {
        width: 100%;
    }
}
</style>