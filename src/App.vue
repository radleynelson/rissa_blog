<template>
  <div id="app">
    <instaHeader/>
    <navbar/>
    <main-logo/>
    <div class="container body">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import instaHeader from './components/instaHeader';
import navbar from './components/navbar';
import mainLogo from './components/mainLogo';
export default {
  name: 'App',
  components: { instaHeader, navbar, mainLogo }
}
</script>

<style>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.body{
  margin-top: 75px;
  
}
</style>
