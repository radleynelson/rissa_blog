<template>
    <div class="center posts">
        <div class="post-title">{{this.post.title.rendered}}</div>
        <div class="post-date">{{this.postDate}}</div>
        <div class="post-img">
            <img :src='this.post.better_featured_image.source_url'/>
        </div>
        <div class="post-preview" v-html="this.postPreview">
        </div>
        <div class="continue-reading"><router-link :to="{ name: 'post', params: {id: this.post.id}}">Continue Reading...</router-link></div>
        <hr>
    </div>
</template>

<script>
import moment from 'moment';
    export default {
        name: 'blogPreview',
        props: ['post'],
        data() {
            return {
                test: 3,
                postPreview: '',
                postDate: '',
                postPreview: '',
            }
        },
        created: function(){
            this.postPreview = this.post.content.rendered.substring(0,150);
            let tempDate = new Date(this.post.date)
            this.postDate = tempDate.toDateString();
            this.postPreview = this.post.excerpt.rendered.replace(/<a class="continue-reading".+<\/a>/,"");
        },
    }
</script>

<style scoped>
@font-face {
    font-family: Avenir;
    src: url('/static/Avenir.ttf') format("truetype")
}
.center{
    margin: auto;
    margin-bottom: 35px;

}
.post-title{
    font-size: 20px;
    text-transform: uppercase;
    font-family: Avenir;
    letter-spacing: 3px;
}
.post-date{
    color: hotpink;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.post-img{
    width: 800px;
    height: 800px;
    margin: auto;
    

}

.post-img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.post-preview{
    font-size: 12px;
    width: 800px;
    margin: auto;
    margin-top: 25px;
}
.post-preview a{
    color: hotpink;
}
.continue-reading{
    color:hotpink;
}
a{
    color: hotpink;
}

</style>