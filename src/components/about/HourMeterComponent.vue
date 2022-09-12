<template>
<div class="time">
    <h1>{{ `${showMinute}:${showSecond}` }}</h1>
    <p>[ {{ nowdoName }} ]</p>
    <a href="" class="material-icons"
    @click.prevent="toggleCountdown($event)" @keydown.enter="toggleButton($event)">
       play_circle_filled
    </a>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'showMinute',
      'showSecond',
      'countdown',
      'nowdoName',
    ]),
  },
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
.time{
    position: absolute;
    width: 350px;
    height: 175px;
    background-color: $secondaryA;
    bottom: 0;
    border-radius: 350px 350px 0 0;
    text-align: center;
    h1{
        font-size: $font-l;
        color: $thirdA;
        margin-top: 57px;
    }
    p{
        color: $primaryA;
        line-height: $font-s;
    }
    a{
        position: absolute;
        width: 116px;
        height: 116px;
        border-radius: 50%;
        bottom: 65%;
        left: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 96px;
        color: $thirdA;
        background-image:radial-gradient(circle 116px,
            $light 0%,
            $light 20%,
            $primaryA 20%,
            $primaryA 42%,
            $thirdA 42%,
            $thirdA 44%,
            $primaryA 44%,
            $primaryA 100%,
            )
    }
    // a::before{
    //     content: '';
    //     position: absolute;
    //     bottom:7%;
    //     left:7%;
    //     width: 100px;
    //     height: 100px;
    //     border-radius: 50%;
    //     border: 2px solid $thirdA;
    // }
}
</style>
