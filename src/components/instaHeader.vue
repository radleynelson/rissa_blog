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

            }
        },
        computed: {
          InstagramPosts: function () {
            return this.$store.getters.Instagram
          }
        },
        created: function() {
          this.$store.dispatch('getInsta');
        }
    }
</script>

<style scoped>
    
</style>
