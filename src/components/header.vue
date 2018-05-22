<template>
  <div id='header'>
    <img src="https://avatars2.githubusercontent.com/u/33473956?s=40&v=4" alt="">
    <h2>
      <router-link to='/'>
        杨雨的家
      </router-link>
      <span v-if='showNav'>
        > 
        <router-link :to='rootPath'>{{pathName}}</router-link>
      </span>
      </h2>
  </div>
</template>

<script>
import { getPathName } from '../constants/RouteConstants.js'
import { getRootPath } from '../utils'

export default {
  name: 'Header',
  computed: {
    path() {
      return this.$route.path
    },
    rootPath() {
      return getRootPath(this.path)
    },
    showNav() {
      return this.path !== '/'
    },
    pathName() {
      return getPathName(this.rootPath)
    }
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background: #90999c;
}
#header > img {
  margin-right: 40px;
}
#header > h2 > a,
#header > h2 > span,
#header > h2 > span > a {
  line-height: 80px;
  color: #fff;
}
#header > img {
  width: 60px;
  height: 60px;
}
</style>
