<template>
    <div class="d-flex flex-column mx-2 align-items-center story-box">
        <div class="center circle-story">
            <div class="center circle-story2">
                <img :src="require(`@/assets/stories/${this.username}.jpg`)" class="control-story rounded-circle" alt=""><br>
            </div>
        </div>
        <span style="font-size:13px">{{username}}</span>
    </div>
</template>

<script>
export default {
    props:["username"],
}
</script>

<style scoped>
.control-story{
    width: 50px;
    height: 50px;
}
.circle-story{
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-image: linear-gradient(to bottom right,red, purple, yellow);
}
.circle-story2{
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: white;
}
</style>