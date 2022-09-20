<template>
    <div class="w-75" :style="'border-color:'+focusStyle">
        <input :type="inputType" class=" w-100" @focus="focus" @blur="focusOut" :placeholder="placeholderName">
    </div>
</template>

<script>
export default {
    props:['placeholderName','inputType'],
    data(){
        return{
            focusStyle:""
        }
    },
    methods:{
        focus(){
            this.focusStyle = "#A8A8A8";
        },
        focusOut(){
            this.focusStyle = "transparent"
        }
    }
}
</script>

<style scoped>
    div{
        border: 1px solid #FAFAFA;
        box-shadow: 0px 0px 1px black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1px;
        background-color: whitesmoke;
        height: 40px;
    }
    div input{
        font-size: 13px;
        padding: 5px;
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline: none;
        border:none;
    }
</style>