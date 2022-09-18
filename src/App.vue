<template>
  <router-view/>
  <TipsMessage></TipsMessage>
  <audio ref="audioWork"
  loop preload="metadata">
    <source src="../public/sounds/Allegro.mp3" type="audio/mpeg">
    <track kind="captions"/>
  </audio>
  <audio ref="audioBreak"
  loop preload="metadata">
    <source src="../public/sounds/Beauty.mp3" type="audio/mpeg">
    <track kind="captions"/>
  </audio>
</template>

<script>

export default {
  data() {
    return {
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
