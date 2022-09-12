<template>
<div class="top3">
    <ul>
        <li v-for="item in todoTop3" :key="item.uuid" :id="item.uuid"
         @click.prevent="turnToTop($event)" @keydown.tab="turnToTop($event)">
            <a href=""><span class="material-icons">radio_button_unchecked</span></a>
            <p>{{item.name}}</p>
            <span v-if="item.pomodo > 10">...</span>
            <span v-for="pomodo in (item.pomodo > 10 ? 10 : item.pomodo)"
               class="material-icons" :key="pomodo">
              motion_photos_on</span>
            <a href="#" class="playbutton"><span class="material-icons">
                play_circle_outline
                </span></a>
        </li>
    </ul>
    <a v-if="todo.length >= 4" href="#" class="more">more</a>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'todoTop3',
      'todo',
    ]),
  },
  methods: {
    turnToTop(e) {
      console.log(e.target.closest('li').id);
      this.$store.commit('setTopTodo', e.target.closest('li').id);
    },
  },
};
</script>

<style lang="scss" scoped>
.top3{
    display: flex;
    flex-direction: column;
    color: $primaryA;
}
ul{
    height: 114.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
li{
    display: flex;
    justify-content: flex-start;
    line-height: 32px;
    border-bottom: 1pt solid gray;
    >span{
      display: block;
      color: $thirdA;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    >p{
      margin-right: 5px;
    }
}

.playbutton{
    margin-left: auto;
}

li>a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primaryA;
}
.more{
    align-self: flex-end;
    margin-top: 9px;
    color: $thirdA;
}
</style>
