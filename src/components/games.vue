<template>
  <div id="games">
    <h3>我的游戏</h3>
    <div>
      <div>
        <img src="https://cdn.steamstatic.com.8686c.com/steam/apps/304390/header.jpg?t=1525683384" alt="">
        <p>For Honor</p>
      </div>
      <div>
        <img src="https://cdn.steamstatic.com.8686c.com/steam/apps/359550/header_alt_assets_1.jpg?t=1526606698" alt="">
        <p>Rainbow Six</p>
      </div>
    </div>
    <div>
      <div>
        <img src="https://cdn.steamstatic.com.8686c.com/steam/apps/271590/header.jpg?t=1516043170" alt="">
        <p>Grand Theft Auto V</p>
      </div>
      <div>
        <img src="https://cdn.steamstatic.com.8686c.com/steam/apps/477160/header.jpg?t=1524051428" alt="">
        <p>Human: Fall Flat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'games'
}
</script>

<style scoped>
#games {
  padding: 30px 0;
}
#games > h3 {
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
#games > div {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
}
#games > div > div {
  width: 200px;
  height: 125px;
  overflow: hidden;
}
#games > div > div > img {
  width: 100%;
}
</style>
