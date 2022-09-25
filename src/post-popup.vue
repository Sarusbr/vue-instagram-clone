<template>
    <div class="center popup" @click="close">
        <div :style="'width: '+size+'px;height:'+(size+42)+'px;'" @click.stop class="popupBox bg-white">
            <div class="popupBox-title border-bottom center f-bold1 font3">
                {{popupTitle}}
                <span v-if="selected" @click="sendPost" class="text-primary crs-pointer ml-4">Paylaş</span>
            </div>
            <div class="popup-content w-100 h-100">
                <div class="dragDropBox center" v-if="!selected">
                    <div style="height:100px;width:187px;padding-left:50px;">
                    <icon-vue name="dragDrop" vuestyle="width:96px;height:77px;"></icon-vue>
                    </div>
                    <span style="font-size:22px;font-weight:300">Fotoğrafları buraya sürükle yada tıkla</span>
                    <input type="file" @change="onChange($event)" class="border w-100 h-100">
                </div>
                <div class="dragDropBox" v-if="selected">
                    <div class="gap-2 w-100 h-25 d-flex">
                        <img :src="this.$store.state.data[0].result.profilePhoto" class="my-rec-profile-img rounded-circle" alt="">
                        <div class="d-flex flex-column reco-this-user">
                            <span class="font1 f-bold pl1">{{this.$store.state.data[0].result.username}}</span>
                        </div>
                    </div>
                    <textarea class="textarea w-100 h-75" placeholder="Açıklama yaz..."></textarea>
                    <!-- <img :src="imgSrc" class=" border post-img" alt=""> -->
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            popupTitle:'Yeni bir gönderi oluştur',
            selected:false,
            imgSrc:null
        }
    },
    methods:{
        onChange(e){
            this.imgSrc = URL.createObjectURL(e.target.files[0]);
            this.selected=true;
        },
        close(){
            this.$store.state.popupStatus = false
        },
        sendPost(){
            alert("veri kısmı daha yapılmaıd çok yakında!")
        }
    },
    computed:{
        size(){
            return this.$store.state.screenWidth > 410 ? 410 : this.$store.state.screenWidth-20;
        }
    }
}
</script>

<style scoped>
.post-img{
    object-fit: contain;
    height: 100%;
    width: 100%;
    
}
.textarea{
    outline:none;
    border: none;
    white-space: nowrap;
}
.popupBox{
    border-radius: 15px;
    display: grid;
    grid-template-rows: 42px 1fr;
    transition: 0.3s;
    position: absolute;
}
.my-rec-profile-img{
    width: 28px;
    height: 28px;
}
.dragDropBox{
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: column;
}
.popup-content{
    width: 300px;
    height: 300px;
    padding: 24px;
}
.popup-content input{
    opacity: 0%;
    position: absolute;
    top: 0px;
    left: 0xp;
}
.popup{
    position: fixed;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>