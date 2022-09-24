<template>
    <div class="post bg-white mb-3 border rounded">
        <div class="post-header border-bottom rounded-top">
            <div class="center"><img :src="post.profilePhoto" class="rounded-circle post-prof-size" alt=""></div>
            <div class="font1 align-items-center d-flex f-bold ml-2">{{post.username}}</div>
            <div class="center crs-pointer"><icon-vue size="24" name="dots"></icon-vue></div>
        </div>
        <div class="post-body">
            <img :src="post.imageUrl" class="w-100" alt="">
        </div>
        <div class="post-footer">
            <div class="post-icons">
                <div class="d-flex gap-3">
                    <icon-vue name="like"></icon-vue>
                    <icon-vue name="comment"></icon-vue>
                    <icon-vue name="dm"></icon-vue>
                </div>
                <div>
                    <icon-vue name="save"></icon-vue>
                </div>
            </div>
            <div class="post-info">
                <div class="f-bold font1 mb-1"> {{post.likeCount+" beğenme"}} </div>
                <div class="font2 mb-1"> <span class="f-bold font2">{{post.username}}</span> {{post.description}} </div>
                <div class="text-muted mb-1 font2">{{post.commentCount}} yorumun tümünü gör</div>
                <div class="text-muted" style="font-size:10px">{{date+" "+ dateInfo}} önce</div>
            </div>
            <hr class="m-0 border">
            <div class="post-comment">
                <div class="center"><icon-vue name="emoji" size="24"></icon-vue></div>
                <div class="center">
                    <input type="text" class="brdnone w-100 h-100" placeholder="Yorum ekle...">
                </div>
                <div class="muted-muted center font2">Paylaş</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["post"],
    data(){
        return{
            date:'',
            dateInfo:''
        }
    },
    created(){
        setInterval(() => {
            let info=null,date=null;
            date = new Date().getFullYear() - new Date(this.post.dateAndTime).getFullYear();
            info = "yıl";
            if(date == 0){
                date = new Date().getMonth() - new Date(this.post.dateAndTime).getMonth();
                info = "ay";
            }
            if(date == 0){
                date = new Date().getDay() - new Date(this.post.dateAndTime).getDay();
                info = "gün";
            }
            if(date == 0){
                date = new Date().getHours() - new Date(this.post.dateAndTime).getHours();
                info = "saat";
            }
            if(date == 0){
                date = new Date().getMinutes() - new Date(this.post.dateAndTime).getMinutes();
                info = "dakika";
            }
            if(date == 0){
                date = new Date().getSeconds() - new Date(this.post.dateAndTime).getSeconds();
                info = "saniye";
            }
            this.dateInfo = info;
            this.date = date;
        }, 1000);
    }
}
</script>

<style scoped>
.post-prof-size{
    width: 32px;
    height: 32px;
}
.brdnone{
    border: none;
    outline:none;
}
.muted-muted{
    color: #C1C1C1;
    font-weight: 400;
}
.post-comment{
    height: 40px;
    margin: 0px 12px 6px 12px;
    display: grid;
    grid-template-columns: 40px 1fr 60px;
    grid-template-rows: 1fr;
}
.post-info{
    padding-top: 6px;
    margin: 6px 12px;
}
.post-icons{
    height: 40px;
    margin: 6px 12px;
    display:flex;
    justify-content: space-between;
    padding-top: 6px;
}
.post-header{
    display: grid;
    grid-template-columns: 56px 1fr 56px;
    grid-template-rows: 56px;
}
</style>