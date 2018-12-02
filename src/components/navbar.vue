<template>
    <div class="columns">
            <nav class="column">
                
            </nav>
            <nav class="nav-top column is-two-thirds">
                <ul class="columns">
                    <li class="column blog-link"><router-link :to="{ name: 'category', params: {id:14, name: 'Lifestyle'}}">Lifestyle</router-link></li>
                    <li class="column blog-link"><router-link :to="{ name: 'category', params: {id: 13, name: 'Beauty'}}">Beauty</router-link></li>
                    <li class="column blog-link"><router-link :to="{ name: 'category', params: {id: 72, name: 'Salon'}}">Salon</router-link></li>
                    <li class="column blog-link"><a href="#">About</a></li>
                    <li class="column blog-link"><a href="#">Contact</a></li>
                </ul>
            </nav>
            <nav class="column">
                <div class="columns icons-nav">
                    <div class="column is-logo">
                        <i class="fa fa-instagram fa-3" aria-hidden="true"></i> 
                        <i class="fa fa-pinterest fa-3" aria-hidden="true"></i> 
                        <i class="fa fa-facebook-square fa-3" aria-hidden="true"></i>
                    </div>
                    <div class="column is-logo">
                        <i class="fa fa-search fa-3" aria-hidden="true"></i>
                    </div>
                    <div class="column">
                        <a class="subscribe" @click="showSubscribe" >SUBSCRIBE</a>
                    </div>
                    
                </div>	
            </nav>
        </div>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                key: 3
            }
        },
      methods: {
          showSubscribe(){
            this.$store.commit('setSubscribeModalStatus', true);
          }
      }
        
    }
</script>

<style scoped>
.nav-top{
        margin: auto;
        width: 50%;
        margin-top: 45px;
    }
    .blog-link{
        font-size: 16px;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: black;
    }
    .blog-link a{
        color: black;
    }
    .blog-link a:hover{
        color: hotpink;
    }
    .is-logo{
        color: grey;
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
    }
    .subscribe{
        border: solid gray 2px;
        color: gray;
        padding: 10px;
    }
    .icons-nav{
        margin-right: 5px;
        margin-top: 35px;
        width: 65%;
        margin-left: 25px;
    }
</style>
