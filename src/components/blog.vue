<template>
  <div>
    <div class='blogBanner'>
      <div>
        <div>
          <img src="../../img/psb (3).jpg" alt="">
        </div>
        <h3>杨雨的博客</h3>
      </div>
    </div>
    <div id='blog'>
      <div>
        <router-link to="/blog/hobby">我的兴趣爱好</router-link>
      </div>
      <div>
        <a href="javascript:void(0)">vue-cli 搭建开发环境</a>
      </div>
      <div>
        <a href="javascript:void(0)">添加 Vue 组件</a>
      </div>
      <div>
        <a href="javascript:void(0)">state</a>
      </div>
      <div>
        <a href="javascript:void(0)">方法</a>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script scoped>
import Foot from './foot'
export default {
  name: 'blog',
  components: {
    Foot
  }
}
</script>

<style>
#blog {
  background: #fff;
  padding: 100px;
}
#blog > div {
  width: 80%;
  margin: 0 auto;
  line-height: 50px;
  padding: 0 50px;
  background: #fff;
  margin-bottom: 50px;
  border-radius: 5px;
}
#blog > div:hover {
  box-shadow: 10px 10px 10px #ccc;
  border: 1px solid #ccc;
}
#blog > div > a {
  color: #000;
}
.blogBanner {
  background: #60bec6;
  width: 100%;
  padding: 50px;
}
.blogBanner > div {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.blogBanner > div > div {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}
.blogBanner > div > div > img {
  width: 200px;
}
.blogBanner > div > h3 {
  font-size: 2rem;
}
</style>
