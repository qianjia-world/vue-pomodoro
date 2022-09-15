<template>
  <router-view/>
  <TipsMessage></TipsMessage>
  <audio ref="audioWork"
  loop preload="metadata">
    <source src="./sounds/Allegro.mp3" type="audio/mpeg">
    <track kind="captions"/>
  </audio>
  <audio ref="audioBreak"
  loop preload="metadata">
    <source src="./sounds/Beauty.mp3" type="audio/mpeg">
    <track kind="captions"/>
  </audio>
</template>

<script>
import DeathParts from './sounds/DeathParts.mp3';// 'DeathParts' is defined but never used
import Dreamland from './sounds/Dreamland.mp3';

export default {
  data() {
    return {
      mouic: [DeathParts, Dreamland],
    };
  },
  mounted() {
    const payload = {
      work: this.$refs.audioWork,
      break: this.$refs.audioBreak,
    };
    this.$store.commit('setAudio', payload);
  },
};
</script>

<style lang="scss">
  @import './styles/reset';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

body{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}

</style>
