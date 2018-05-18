<template>
  <div id="blogComent">
    <Header />
    <div id="center">
      <div id="nav">
        <ul>
          <li v-for="t in tocList" :key="t.id">
            <router-link :to="`/blog/hobby/${t.id}`">
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
#center {
  display: flex;
}
</style>
