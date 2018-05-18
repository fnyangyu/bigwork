<template>
  <div id="gaContent">
    <div v-if="isPetPage">
      <Pet />
    </div>
    <div v-if="isLifePage">
      <Life />
    </div>
    <div v-if="isGamesPage">
      <Games />
    </div>
  </div>
</template>

<script>
import Pet from './pet.vue'
import Games from './games.vue'
import Life from './life.vue'
export default {
  name: 'gaContent',
  components: {
    Life,
    Pet,
    Games
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isPetPage() {
      return this.id == 'pet'
    },
    isLifePage() {
      return this.id == 'life'
    },
    isGamesPage() {
      return this.id == 'games'
    }
  }
}
</script>

<style>
#gaContent {
  width: 100%;
}
</style>
