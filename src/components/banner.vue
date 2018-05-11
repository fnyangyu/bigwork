<template>
  <div id='banner'>
    <div>
      <img src="http://b122.photo.store.qq.com/psb?/V13N28QH4Cdvde/0pG1FGyu4*uvu1aZbAB1bCbFq38XbeIyZy5EXAzI70Y!/m/dADlwEhZEQAAnull&bo=hgIgAyAD3gMBCHY!&rf=photolist&t=5" alt="">
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
#banner > h1 {
  margin-top: 40px;
}
</style>
