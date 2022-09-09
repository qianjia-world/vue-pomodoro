<template>
  <div class="round-border">
    <div class="round">
      <a href="" class="material-icons" ref="toggleButton"
        @click.prevent="toggleCountdown($event)" @keydown.enter="toggleButton($event)
        " >play_circle_filled
      </a>
      <span class="material-icons">
      stop
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCountdown(e) {
      if (e.target.innerText === 'play_circle_filled') {
        this.$store.commit('setCountdown', true);
        this.$store.dispatch('openCountdown', e);
        e.target.innerText = 'pause_circle_filled';
      } else {
        this.$store.commit('setCountdown', false);
        e.target.innerText = 'play_circle_filled';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.round-border{
    width: 540px;
    height: 540px;
    border-radius: 50%;
    border: 4px solid $thirdA;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    >.round{
        background-color: $thirdA;
        border-radius: 50%;
        width: 500px;
        height: 500px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        >a{
            font-size: 96px;
            color: $light;
        }
        >span{
        position: absolute;
        font-size: $font-s;
        color: $light;
        left: 58%;
        top: 54%;
        }
    }
}
</style>
