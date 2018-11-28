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
export default {
  name: 'HomePage',
  components: {categoryImg, blogPreview},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      categories: [],
      posts: [],
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
    axios.get('http://rissanelson.com/wp-json/wp/v2/posts').then(res => {
      this.posts = res.data;
    }).catch(err => {
      console.log(err);
    })
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
