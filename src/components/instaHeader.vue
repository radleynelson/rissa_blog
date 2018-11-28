<template>
    <div>
        <div class="columns" >
            <instaPic style="margin: 0; padding:0" v-for="(post,index) in InstagramPosts" :key="index" class="column" v-bind:image='post'/>
        </div>
        
    </div>
</template>
<script>
    import axios from 'axios';
    import instaPic from './instaPic'
    export default {
        name: 'instaHeader',
        components: { instaPic },
        data() {
            return {
                InstagramPosts: [],
            }
        },
        created: function() {
            axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=195216274.28884f1.5b0c0e0cd28d48c88b3ae0efd32cae0a').then(res => {
                console.log(res.data);
                for (let iCount = 0; iCount < 12; iCount++){
                    this.InstagramPosts.push(res.data.data[iCount])
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
    
</style>