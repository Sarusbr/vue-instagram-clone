<template>
    <div class="d-flex flex-column mx-2 align-items-center story-box">
        <div class="center circle-story">
            <div class="center circle-story2">
                <img :src="require(`@/assets/stories/${this.username}.jpg`)" class="control-story rounded-circle" alt=""><br>
            </div>
        </div>
        <span style="font-size:13px" class="text-muted">{{username}}</span>
    </div>
</template>

<script>
export default {
    props:["username"],
}
</script>

<style scoped>
.control-story{
    width: 56px;
    height: 56px;
}
.circle-story{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-image: linear-gradient(to bottom right,red, purple, yellow);
}
.circle-story2{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
}
</style>