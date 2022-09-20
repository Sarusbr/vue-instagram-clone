<template>
    <div class="center flex-column w-100">
        <div class="loginbox center mb-3 border border-secondery py-4">
            <img src="../../assets/logo.png" class="w-50 user-select-none" alt="">

            <input-text class="w-75" inputType="text" placeholderName="Kullanıcı adı, e-posta veya telefon"></input-text>
            <input-text class="w-75" inputType="password" placeholderName="Şifre"></input-text>

            <div class="btn btn-primary w-75">Giriş Yap</div>

            <div class="d-flex w-100 yadaDiv">
                <hr class="w-100 mx-3">
                <div class=" yada center font-weight-bold text-muted">YA DA</div>
                <hr class="w-100 mx-3">
            </div>

            <div class="w-100 center crs-pointer user-select-none">
                <img class="faceimg mx-2" src="../../assets/faceIcon.png" alt=""> <span class="font-weight-bold">Facebook ile giriş yap</span>
            </div>

            <div class="w-100 center crs-pointer user-select-none">
                <span class="font-weight-bold font-size text-muted">Şifreni mi unuttun?</span>
            </div>
            
        </div>
        <sing-in></sing-in>
    </div>
    
</template>

<script>
import inputText from "./input-text.vue";
import singIn from "./singIn.vue";
export default {
    components:{
        inputText,
        singIn
    }
}
</script>

<style>
    .loginbox{
        width: 350px;
        flex-direction: column;
        gap:20px;
        background-color: white;
        box-shadow: 0px 0px 0.5px black;
    }
    @media screen and (max-width: 400px) {
        .loginbox {
            width: 100%;
        }
    }
    .crs-pointer{
        cursor: pointer;
    }
</style>

<style scoped>
.yada{
    width: 150px;
    font-size: 14px;
}
.faceimg{
    width: 20px;
    height: 20px;
}
.font-size{
    font-size: 13px;
}
</style>