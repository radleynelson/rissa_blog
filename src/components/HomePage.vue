<template>
  <div>
    <div class="columns ">
      <category-img v-for="category in categories" :key='category' :image='category'/>
    </div>
    <div class='posts'>
      <blog-preview v-for='(post, index) in posts' :key='index' :post='post'/>
    </div>

  </div>

</template>

<script>
import categoryImg from './categoryImg';
import blogPreview from './blogPreview';
import axios from 'axios';
import Subscribe from "./subscribe";
//import  store from '../store'

const MAILCHIMP_KEY = 'e77668ae7cade38e21ed448e32a064af-us19';

const url = "https://us19.api.mailchimp.com/3.0/lists/748aa73022/members/";

const client = axios.create({
  auth: {
    username: "rissa4",  //This could be your email
    password: MAILCHIMP_KEY
  },
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  name: 'HomePage',
  components: {Subscribe, categoryImg, blogPreview},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      categories: [],
    }
  },
  computed: {
    posts: function () {
      return this.$store.getters.posts;
    }
  },
  created: function(){
    this.categories.push({
      name: 'Lifestyle',
      img: 'http://rissanelson.com/wp-content/uploads/2018/11/preset-bridal-155-of-166.jpg',
      num: 14
    });
    this.categories.push({
      name: 'Beauty',
      img: 'http://rissanelson.com/wp-content/uploads/2018/11/IMG_5531.jpg',
      num: 13

    });
    this.categories.push({
      name: 'Salon',
      img: 'http://rissanelson.com/wp-content/uploads/2018/11/IMG_1184.jpg',
      num: 72
    });
    this.$store.dispatch('getPosts');
    // axios.get('https://us19.api.mailchimp.com/3.0/lists/748aa73022/memebers', {
    //     auth: {
    //       username: "rissa4",
    //       password: "e77668ae7cade38e21ed448e32a064af-us19"
    //     }
    //   }
    // ).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log('error', err);
    // })

    // axios.get('https://us19.api.mailchimp.com/3.0/',{auth: {username: 'anystring',password: 'e77668ae7cade38e21ed448e32a064af'}}).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log("You hit an error");
    // })

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts{
  margin-top: 100px;
}
.continue-reading{
  color: #EADCDC;
}
</style>
