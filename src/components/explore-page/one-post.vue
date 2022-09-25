<template>
    <div ref="square" @click="test" :style="square" class="bg-primary crs-pointer post center">
        <img :src="data.imageUrl[0]" class="w-100 h-100 post-img" alt="">
        <div class="post-hover w-100 h-100 center gap-3 text-white">
            <div class="center"><icon-vue name="like" vuestyle="fill:white;"></icon-vue>{{data.likeCount}}</div>
            <div class="center"><icon-vue name="comment" vuestyle="fill:white;"></icon-vue>{{data.commentCount}}</div>
        </div>
    </div>    
</template>

<script>
export default {
    props:["data"],
    data(){
        return{
            square:null
        }
    },
    methods:{
        test(){
            console.log('height:'+this.$refs.square.clientWidth+'px');
        }
    },
    created(){
        console.log(this.data);
        setInterval(() => {
            try {
                this.square = 'height:'+this.$refs.square.clientWidth+'px';
            } catch (error) {
                error
            }
        }, 300);
    }
}
</script>

<style scoped>
.post{
    position: relative;
    flex: 0 0 30%;
    margin: 0px;
}
.post-hover{
    background-color: rgb(0, 0, 0,0.5);
    position: absolute;
    transition: 0.3s;
    opacity: 0%;
}

.post-hover:hover{
    opacity: 100%;
}
.post-img{
    object-fit: cover;
}
</style>