<template>
    <div>
        <div class="post-title">
            {{this.postTitle}}
        </div>
        <div v-if="this.coverImage" class="cover-image">
            <img :src="this.coverImage"/>
        </div>
        <div class="post-content">
            <div class="content" v-html="bodyContent"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'post',
        data() {
            return {
                test: 3,
                post: {},
                coverImage: '',
                bodyContent: '',
                postTitle: '',
                faq: [],
            }
        },
        created: function(){
             axios.get('http://rissanelson.com/wp-json/wp/v2/posts/'+ this.$route.params.id).then(res => {
                this.post = res.data;
                this.coverImage = this.post.better_featured_image.source_url;
                this.bodyContent = this.post.content.rendered;
                this.postTitle = this.post.title.rendered;
            }).then(res => {
                if(this.$route.params.id == 1507){
                    let faq_array = document.body.innerHTML.match(/faq\d{4}_q/g);
                    let unique_faq = this.removeDuplicates(faq_array);
                    this.faq = unique_faq;

                    for(let iCount = 0; iCount < unique_faq.length; iCount++){
                        document.getElementById(unique_faq[iCount]).addEventListener("click", function(){
                        
                        if(document.getElementById(unique_faq[iCount].substr(0,7) + '_a').style.display == 'none' || document.getElementById(unique_faq[iCount].substr(0,7) + '_a').style.display == ''){
                            document.getElementById(unique_faq[iCount].substr(0,7) + '_a').style.display = 'block';
                            document.getElementById(unique_faq[iCount].substr(0,7) + '_a').style.color = 'black';

                        }
                        else{
                            document.getElementById(unique_faq[iCount].substr(0,7) + '_a').style.display = 'none';
                        }
                    });
                    }
                }
            }).catch(err => {
                console.log(err);
            })
        },
        mounted: function(){
            
        },
        methods: {
            removeDuplicates(arr) {
                let unique_array = []
                for(let i = 0;i < arr.length; i++){
                    if(unique_array.indexOf(arr[i]) == -1){
                        unique_array.push(arr[i])
                    }
                }
                return unique_array
            }
        },
    }
</script>

<style scoped>
@font-face {
    font-family: Avenir;
    src: url('/static/Avenir.ttf') format("truetype")
}
.cover-image{
    width: 1200px;
    height: 600px;
    margin: auto;
}
.cover-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.post-content{
    margin-top: 50px;
}
.post-title{
    font-size: 38px;
    margin-bottom: 35px;
    margin-top: 40px;
    font-family: Avenir;
    letter-spacing: 3px;
    text-transform: uppercase;
}
</style>