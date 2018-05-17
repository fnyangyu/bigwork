<template>
  <div id='banner'>
    <div>
      <img src="../../img/psb.jpg" alt="">
    </div>
    <h1>欢迎来到我的网上家园</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
#banner {
  background: #60bec6;
  width: 100%;
  text-align: center;
  padding: 50px;
}
#banner > div {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}
#banner > div > img {
  width: 200px;
}
#banner > h1 {
  margin-top: 40px;
}
</style>
