<template>
    <div class="categories">
        <div class="category-title">
            {{this.$route.params.name}}
        </div>
        <div class="parent">
            <category-preview  v-for="(category, index) in categoryPosts" :image="category" :key="index"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import categoryPreview from './categoryPreview'
    export default {
        name: 'category',
        components: {categoryPreview},
        data() {
            return {
                test: 3,
            }
        },
      computed: {
        categoryPosts: function () {
          return this.$store.getters.categoryPosts
        }
      },
        // watch: {
        //     '$route': this.reLoadData()
        // },
        created: function(){

            this.$store.dispatch('getCategoryPosts', this.$route.params.id);

        },
        methods: {
            // reLoadData() {
            //     axios.get('http://rissanelson.com/wp-json/wp/v2/posts?categories=' + this.$route.params.id).then(res => {
            //     this.categoryPosts = res.data;
            //     }).catch(err => {
            //     console.log(err);
            //     })
            // }
        },
    }
</script>

<style scoped>
.category-title{
    font-size: 42px;
    text-transform: uppercase;
    letter-spacing: 3px;
}
.parent{
    display: grid;
    grid: 500px 500px 500px/310px 310px 310px;
    grid-row-gap: 40px;
    grid-column: 30px;
}
.parent>div{
    padding: 0;
    margin: 0;
}
.categories{
    margin: auto;
    width: 900px;
}
</style>
