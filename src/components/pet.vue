<template>
  <div id="pet">
    <h3>我的宠物</h3>
    <div>
      <div>
        <img src="../../img/pet/psb.jpg" alt="">
      </div>
      <div>
        <img src="../../img/pet/psb (1).jpg" alt="">
      </div>
      <div>
        <img src="../../img/pet/psb (2).jpg" alt="">
      </div>
    </div>
    <div>
      <div>
        <img src="../../img/pet/psb (3).jpg" alt="">
      </div>
      <div>
        <img src="../../img/pet/psb (4).jpg" alt="">
      </div>
      <div>
        <img src="../../img/pet/psb (5).jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pet'
}
</script>

<style scoped>
#pet {
  padding: 30px 0;
}
#pet > h3 {
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
#pet > div {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
}
#pet > div > div {
  width: 150px;
  height: 200px;
  overflow: hidden;
}
#pet > div > div > img {
  width: 100%;
}
</style>
