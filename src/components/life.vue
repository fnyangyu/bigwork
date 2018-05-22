<template>
  <div id="life">
    <h3>我的生活</h3>
    <div>
      <img src="../../img/psb.jpg" alt="">
      <p>身高： 175cm</p>
      <p>体重： 105kg</p>
      <p>年龄： 18+</p>
      <p>兴趣爱好： 撸猫吸狗，和朋友玩游戏，逛街</p>
      <p>饮食习惯： 除了辣椒，香菜，咸菜和酒以外其他没什么忌口的<span>(正常人类饮食范围内!!)</span></p>
      <p>本人性格： 开朗大方，脾气温和，不惹我就不生气</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'life'
}
</script>

<style scoped>
#life {
  padding: 30px 0;
}
#life > h3 {
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
#life > div {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  padding: 30px;
}
#life > div > p {
  text-align: left;
  line-height: 50px;
  font-size: 14px;
}
#life > div > p > span {
  color: red;
}
#life > div > img {
  width: 150px;
}
</style>
