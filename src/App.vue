<template>
  <router-view/>
  <TipsMessage></TipsMessage>
  <audio ref="audio"
  loop preload="metadata">
    <source src="aaa.mp3" type="audio/mpeg">
    <track kind="captions"/>
  </audio>
</template>

<script>

export default {
  data() {
    return {
      audio: this.$refs.audio,
    };
  },
  provide() {
    return {
      audio: Vue.computed(() => this.audio),
    };
  },
  mounted() {
    this.audio = this.$refs.audio;
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
