<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{msg}}</p>
        <button @click="closeSubscribe" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Enter your email to be updated on new Posts, and to receive your <span class="emphasize">FREE hair workshop</span></p>
        <p><input v-model="userEmail" class="email-input input" type="text" placeholder="EMAIL"></p>
      </section>
      <footer class="modal-card-foot">
        <button @click="userSubscribe" class="button is-success email-input">SUBSCRIBE</button>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "subscribe",
      data () {
        return {
          msg: 'Sign Up For Updates',
          details: 'Enter your email to be updated on new Posts, and to receive your FREE hair workshop',
          categories: [],
          userEmail: '',
        }
      },
      methods: {
          closeSubscribe(){
            this.$store.commit('setSubscribeModalStatus', false)
          },
        userSubscribe(){
            this.$store.dispatch('userSubscribe', this.userEmail);
            this.userEmail = '';
            this.$store.commit('setSubscribeModalStatus', false);
        }
      }
    }
</script>

<style scoped>
  .modal{
    display: block;
  }
  .modal-card{
    margin-top: 25%;
    width: 400px;
  }
  .emphasize {
    font-weight: bold;
  }
  .email-input{
    width: 100%;
  }
  .button.is-success{
    background-color: gray;
  }
</style>
