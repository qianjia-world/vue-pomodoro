<template>
<div class="nowtodo">
    <a href="" @click.prevent="finishTodo()"
    @keydown.enter.prevent="finishTodo()">
        <span class="material-icons">donut_large</span>
        <!-- <span class="material-icons">done</span> -->
        <div class="nowdo">
          <p>[ {{ nowdoName }} ]</p>
          <div class="num">
            <span v-for="item in pomodoNum" class="material-icons" :key="item">
              motion_photos_on</span>
            <span v-if="countdown" class="material-icons">timelapse</span>
          </div>
        </div>
    </a>
    <div class="time">{{ `${showMinute}:${showSecond}` }}</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'showMinute',
      'showSecond',
      'todo',
      'done',
      'countdown',
      'nowdoName',
    ]),
    pomodoNum() {
      return this.todo[0].pomodo;
    },
  },
  methods: {
    finishTodo() {
      this.$store.commit('finishTodo', this.todo[0].uuid);
    },
  },
};
</script>

<style lang="scss" scoped>
.nowtodo>a{
    display: flex;
    color: $primaryA;
    >span{
        font-size: 60px;
        margin-right: 16px;
    }

}

.nowdo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .num{
    display: flex;
    align-items: center;
  }
  span{
    font-size: 24px;
    color: $thirdA;
  }
  p{
    font-size: $font-s;
    line-height: 28px;
    color: $primaryA;
  }
}
.time{
    font-size: 176px;
    line-height: 206px;
    color: $thirdA;
}
</style>
