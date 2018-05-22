<template>
  <div class="bg">
    <div id="myAlbum">
      <h3>我的相册</h3>
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
    <Foot />
  </div>
</template>

<script>
import Foot from './foot.vue'

export default {
  name: 'myAlbum',
  components: {
    Foot
  }
}
</script>

<style>
.bg {
  background: #fff;
}
#myAlbum {
  padding: 30px 0;
}
#myAlbum > h3 {
  display: block;
  width: 80%;
  margin: 0 auto;
  line-height: 60px;
  background: #53a6ae;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
}
#myAlbum > div {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
}
#myAlbum > div > div {
  width: 150px;
  height: 190px;
  overflow: hidden;
  box-shadow: 5px 5px 5px #999;
}
#myAlbum > div > div > img {
  width: 100%;
}
</style>
