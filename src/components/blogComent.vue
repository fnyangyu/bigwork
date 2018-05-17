<template>
  <div id="blogComent">
    <Header />
    <div id="center">
      <div id="nav">
        <router-link to="/">我的游戏</router-link>
        <router-link to="/">我的生活</router-link>
        <router-link to="/">我的宠物</router-link>
      </div>
      <div id="neiRong">
        <h3>我爱玩的游戏</h3>
        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogComent'
  // computed: {
  //   id() {
  //     return this.$route.params.id
  //   }
  // }
}
</script>

<style>
#neiRong {
  background: #a7cbd0;
  width: 80%;
  height: calc(90vh - 80px);
  text-align: center;
}
#neiRong > h3 {
  display: block;
  width: 80%;
  margin: 0 auto;
  line-height: 60px;
  background: #53a6ae;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}
#nav {
  width: 20%;
  height: calc(90vh - 80px);
  padding: 50px 0 50px 50px;
  background: #53a6ae;
}
#nav > a {
  display: block;
  color: #000;
  line-height: 50px;
}
#center {
  display: flex;
}
</style>
