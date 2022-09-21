<template>
    <div class="center" style="width:100%;height:100vh;">
        <div class="center flex-column w-100">
            <div class="loginbox center mb-3 border border-secondery py-4">
                <img src="./assets/logo.png" class="w-50 user-select-none" alt="">

                <input-text class="w-75" @modelData="email = $event" inputType="text" placeholderName="E-posta"></input-text>
                <input-text class="w-75" @modelData="name = $event" inputType="text" placeholderName="Ad Soyad"></input-text>
                <input-text class="w-75" @modelData="username = $event" inputType="text" placeholderName="Kullanıcı Adı"></input-text>
                <input-text class="w-75" @modelData="password = $event" inputType="password" placeholderName="Şifre"></input-text>

                <div class="btn btn-primary w-75" @click="singup">Kaydol</div>

                <div class="d-flex w-100 yadaDiv">
                    <hr class="w-100 mx-3">
                    <div class=" yada center font-weight-bold text-muted">YA DA</div>
                    <hr class="w-100 mx-3">
                </div>

                <div class="w-100 center crs-pointer user-select-none">
                    <img class="faceimg mx-2" src="./assets/faceIcon.png" alt=""> <span class="font-weight-bold">Facebook ile giriş yap</span>
                </div>
                
            </div>
            <singin></singin>
        </div>
    </div>
</template>

<script>
import inputText from "./components/tools/input-text.vue";
import singin from "./components/register-page/singIn.vue";
import axios from "axios";
export default {
    data(){
        return{
            email:null,
            username:null,
            name:null,
            password:null
        }
    },
    methods:{
        singup(){
            alert("kayıt işlemi yapılıyor lütfen bekleyiniz.")
            axios.post("/createUser",{
                name:this.name,
                email:this.email,
                username:this.username,
                password:this.password
            })
            .then(response => console.log(response))
        }
    },
    components:{
        inputText,
        singin
    }
}
</script>

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