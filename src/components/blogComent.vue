<template>
  <div id="blogComent">
    <Header />
    <div class='blogBanner'>
      <div>
        <div>
          <img src="../../img/psb (3).jpg" alt="">
        </div>
        <h3>杨雨的博客</h3>
      </div>
    </div>
    <div id="center">
      <div id="nav">
        <ul>
          <li v-for="t in tocList" :key="t.id">
            <router-link :to="`/blog/${t.id}`" active-class="active">
              {{ t.text }}
            </router-link>
          </li>
        </ul>
      </div>
      <div id="neiRong">
        <GaContent />
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import { tocArr } from '../constants/gaConstants.js'
import GaContent from './gaContent.vue'
import Foot from './foot.vue'
export default {
  name: 'blogComent',
  computed: {
    tocList: function() {
      return tocArr
    }
  },
  components: {
    GaContent,
    Foot
  }
}
</script>

<style>
#neiRong {
  background: #a7cbd0;
  width: 80%;

  text-align: center;
}
#nav {
  width: 20%;
  padding: 50px 0 50px 50px;
  background: #53a6ae;
}
#nav > ul {
  padding: 0;
}
#nav > ul > li {
  list-style: none;
}
#nav > ul > li > a {
  display: block;
  color: #000;
  line-height: 50px;
}
#nav > ul > li > a.active {
  color: red;
}
#center {
  display: flex;
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
