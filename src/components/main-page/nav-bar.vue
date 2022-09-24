<template>
    <div class="navbar navbar-light bg-white border-bottom ins-navbar">
        <div class="container ins-navbar-grid">
           
            <div><img src="@/assets/logo.png" alt="" class="ins-img"></div>
            
            <div>
                <input type="text"  class="form-control ins-input" v-if="screenWidth > 800" placeholder="Ara">
            </div>
            
            <div style="padding-left:50px">
                <div class="d-flex ing-icon-box" :style="screenWidth > 400 ? 'gap-2':''">
                    <iconVue class="crs-pointer" name="home"></iconVue>
                    <iconVue class="crs-pointer" name="dm"></iconVue>
                    <iconVue class="crs-pointer" name="add" @click="openPopup"></iconVue>
                    <iconVue class="crs-pointer" name="explore"></iconVue>
                    <iconVue class="crs-pointer" name="likes"></iconVue>
                    <iconVue class="crs-pointer" @click="mytest" name="profileIcon"></iconVue>
                </div>
            </div>

        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            screenWidth:0
        }
    },
    methods:{
        mytest(){
            console.log(this.$store.state.data[1].resultAllUsers)
        },
        openPopup(){
            this.$store.state.popupStatus = true;
        }
    },
    created(){
        setInterval(()=>{
            this.screenWidth = document.body.offsetWidth;
        },10)
    }
}
</script>

<style scoped>
.ins-navbar{
    width: 100%;
    height: 60px;
    padding: 0px;
    position: sticky;
    top: 0px;
}

@media screen and (min-width: 800px){
    .ins-navbar-grid{
        display: grid;
        grid-template-columns: 1fr 268px 1fr;
        grid-template-rows: 1fr;
        gap: 0px;
    }  
    
    .ing-icon-box{
        height: 24px;
        justify-content: space-between;
        width: 254px;
    }
}

@media screen and (max-width: 800px){
    .ins-navbar-grid{
        display: flex;
    }

    .ing-icon-box{
        height: 24px;
        justify-content: space-between;
    }
}

@media screen and (max-width:500px){

}

.ins-img{
    height: 29px;
    margin-top: 7px;
}

.ins-input{
    height: 36px;
    padding: 3px 16px;
    background-color: #EFEFEF;
}

@media screen and (min-width: 1200px){
    .container{
        width: 935px;
        height: 100%;
        padding: 0px;
    }
}


</style>