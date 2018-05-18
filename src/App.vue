<template>
  <div id="app">
    <div id="background">
    </div>
    <div id="app1">
      <Header />
      <router-view>
        <Main />
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Banner from './components/banner.vue'
export default {
  name: 'App',
  components: {
    Header,
    Banner
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
}
#background {
  background-image: url('http://bpic.588ku.com/back_pic/00/00/69/40/e813e05e7e2a4039313a82cd1ef3de02.jpg!r850/fw/800');
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: fixed;
}
#app1 {
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  opacity: 0.9;
}
a {
  text-decoration: none;
}
</style>
