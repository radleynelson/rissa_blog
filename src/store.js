import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    user: {},
    categories: [],
    posts: [],
    InstagramPosts: [],
    categoryPosts: [],
    showSubscribeModal: false,
  },
  getters: {
    posts: state => state.posts,
    Instagram: state => state.InstagramPosts,
    categoryPosts: state => state.categoryPosts,
    SubscribeModalStatus: state => state.showSubscribeModal,

  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts;
    },
    setInsta(state, InstaPosts){
      state.InstagramPosts = InstaPosts;
    },
    setCategoryPosts(state, CategoryPosts) {
      state.categoryPosts = CategoryPosts;
    },
    setSubscribeModalStatus(state, status){
      state.showSubscribeModal = status;
    },
    setUserEmail(state, email){
      state.user.email = email;
    }
  },
  actions: {
    getPosts(context) {
      return axios.get('http://rissanelson.com/wp-json/wp/v2/posts').then(res => {
        context.commit('setPosts', res.data)
      }).catch(err => {
        console.log(err);
      })
    },

    getInsta(context){
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=195216274.28884f1.5b0c0e0cd28d48c88b3ae0efd32cae0a').then(res => {
        console.log(res.data);
        let tempInsta = [];
        for (let iCount = 0; iCount < 12; iCount++){
          tempInsta.push(res.data.data[iCount])
        }
        context.commit('setInsta', tempInsta);
      }).catch(err => {
        console.log(err);
      })
    },

    getCategoryPosts(context, categoryID){
      axios.get('http://rissanelson.com/wp-json/wp/v2/posts?categories=' + categoryID).then(res => {
        context.commit('setCategoryPosts', res.data);
      }).catch(err => {
        console.log(err);
      })
    },
    userSubscribe(context, email){
      axios.post('/api/AddSubscriber',{body:{email: email}}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log('There was an error', err);
      });
      context.commit('setUserEmail', email);
    },


  },
  plugins:[new VuexPersistence().plugin]
});
