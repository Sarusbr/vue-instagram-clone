<template>
    <div class="center flex-column">
        <div class="loginbox center mb-3 border border-secondery py-4">
            <img src="src/assets/logo.png" class="w-50" alt="">
            <input-text class="w-75" inputType="text" placeholderName="Kullanıcı adı, e-posta veya telefon"></input-text>
            <input-text class="w-75" inputType="password" placeholderName="Şifre"></input-text>
            <div class="btn btn-primary w-75">Giriş Yap</div>
            <div class="d-flex w-100 yadaDiv">
                <hr class="w-100 mx-3">
                <div class=" yada center font-weight-bold text-muted">YA DA</div>
                <hr class="w-100 mx-3">
            </div>
            <div class="w-100 center crs-pointer user-select-none">
                <img class="faceimg mx-2" src="src/assets/faceIcon.png" alt=""> <span class="font-weight-bold">FaceBook ile giriş yap</span>
            </div>
            <div class="w-100 center crs-pointer user-select-none">
                <span class="font-weight-bold font-size text-muted">Şifreni mi unuttun?</span>
            </div>
        </div>
        <div class="center border p-3 registerBox">
            <span>Hesabın yok mu?</span>
            <span class="mx-2 fw-bold crs-pointer text-primary">Kaydol</span>
            
        </div>
    </div>
    
</template>

<script>
import inputText from "./input-text.vue";
export default {
    components:{
        inputText
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
    .crs-pointer{
        cursor: pointer;
    }
</style>

<style scoped>
.registerBox{
    width: 350px;
    background-color: white;
    box-shadow: 0px 0px 0.5px black;
}
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