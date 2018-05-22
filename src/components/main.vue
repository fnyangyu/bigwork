<template>
  <div>
    <Banner />
    <div id='main'>
      <div>
        <div>
          <div>
            <img src="../../img/psb (2).jpg" alt="">
          </div>
          <router-link to='/'>我的简历</router-link>
        </div>
        <div>
          <div>
            <img src="../../img/psb (3).jpg" alt="">
          </div>
          <router-link to='/blog'>我的博客</router-link>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="../../img/psb (4).jpg" alt="">
          </div>
          <router-link to='/mynote'>我的笔记</router-link>
        </div>
        <div>
          <div>
            <img src="../../img/psb (1).jpg" alt="">
          </div>
          <router-link to='/myalbum'>我的相册</router-link>
        </div>
      </div>
      <p>Stay Hungry Stay Foo</p>
    </div>
    <Foot />
  </div>
</template>

<script>
import Banner from './banner'
import Foot from './foot'
export default {
  name: 'Main',
  components: {
    Banner,
    Foot
  }
}
</script>

<style scoped>
#main {
  background: #fff;
  padding: 100px;
}
#main > div {
  display: flex;
  justify-content: space-between;
}
#main > div > div {
  width: 378px;
  background: #a7cbd0;
  text-align: center;
  padding: 69px 0;
  border-radius: 30px;
}
#main > div > div > div > img {
  width: 200px;
}
#main > div > div > div {
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 69px;
}
#main > div:nth-child(2) {
  margin-top: 100px;
}
#main > div > div > a {
  font-size: 24px;
  color: purple;
}
#main > p {
  text-align: center;
  margin-top: 100px;
  font-size: 30px;
  color: #60bec6;
  font-weight: bold;
}
</style>
