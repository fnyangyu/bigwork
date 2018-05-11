<template>
  <div>
    <Banner />
    <div id='main'>
      <div>
        <div>
          <div>
            <img src="http://b117.photo.store.qq.com/psb?/V13N28QH3GQEhc/OIYskBwupFJcjW9KsTy2dtRx1WrEmLxWTomvSRGhSJU!/m/dHUAAAAAAAAAnull&bo=OASgBWAJgAwRCUI!&rf=photolist&t=5" alt="">
          </div>
          <router-link to='/'>我的简历</router-link>
        </div>
        <div>
          <div>
            <img src="http://b198.photo.store.qq.com/psb?/V13N28QH3GQEhc/7OAzk5gd7TYPulX*JOZ9eh4vIjs*.OGp*w.QXe37eUg!/b/dH2tE3b4IwAA&bo=IAOOBYQDQAYFCEI!&rf=viewer_4&t=5" alt="">
          </div>
          <router-link to='/blog'>我的博客</router-link>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="http://b179.photo.store.qq.com/psb?/V13N28QH3GQEhc/vRQmm1ZSKYSni1J9PXk8fmtv.M*7Or.72Yy1lGdBpE4!/m/dLMAAAAAAAAAnull&bo=OASgBWAJgAwRCUI!&rf=photolist&t=5" alt="">
          </div>
          <router-link to='/'>我的笔记</router-link>
        </div>
        <div>
          <div>
            <img src="http://b198.photo.store.qq.com/psb?/V13N28QH3GQEhc/gIUfnofLUoz.0KTmOdeC*nmRuPA9ePlfS92Vb1CbDeE!/m/dCw1EnbxIwAAnull&bo=IAOOBYQDQAYFCEI!&rf=photolist&t=5" alt="">
          </div>
          <router-link to='/'>我的相册</router-link>
        </div>
      </div>
      <p>Stay Hungry Stay Foo</p>
    </div>
  </div>
</template>

<script>
import Banner from './banner'
export default {
  name: 'Main',
  components: {
    Banner
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
