<template>
  <div class="list">
    <div class="title">
      <h2>{{titleName}}</h2>
      <a href="" class="material-icons" @click.prevent="togglelist($event)"
      @keydown.enter.prevent="togglelist($event)">
        arrow_drop_up
      </a>
    </div>
    <ul ref="list">
      <li v-for="item in renderList" :key="item.uuid">
        <!-- <span class="material-icons">
        check_circle_outline
        </span> -->
        <a v-if="title === 'todo'" href="" class="material-icons"
          @click.prevent="finishTodo(item.uuid)" @keydown.enter.prevent="finishTodo(item.uuid)">
            radio_button_unchecked
        </a>
        <a v-else class="material-icons">check_circle_outline</a>
        <p :class="{deleteline: title === 'done' }">{{item.name}}</p>
        <span v-if="item.pomodo > 10">...</span>
        <span v-for="pomodo in (item.pomodo > 10 ? 10 : item.pomodo)" class="material-icons"
         :key="pomodo">motion_photos_on</span>
        <a href="#" class="playbutton
         material-icons" v-if="title === 'todo'" @click.prevent="deleteTodo(item.uuid)">
          remove_circle_outline
        </a>
        <a href="#" v-else class="playbutton material-icons" @click.prevent="reTodo(item.uuid)">
          restore</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  props: ['title'],
  computed: {
    ...mapGetters([
      'todo',
      'done',
    ]),
    titleName() {
      return this.title === 'todo' ? 'to-do' : 'done';
    },
    renderList() {
      return this.title === 'todo' ? this.todo : this.done;
    },
  },
  methods: {
    finishTodo(uuid) {
      this.$store.commit('finishTodo', uuid);
    },
    deleteTodo(uuid) {
      this.$store.commit('deleteTodo', uuid);
    },
    reTodo(uuid) {
      this.$store.commit('reTodo', uuid);
    },
    togglelist(e) {
      if (this.$refs.list.style.display !== 'none') {
        this.$refs.list.style.display = 'none';
        e.target.innerText = 'arrow_drop_down';
      } else {
        this.$refs.list.style.display = 'flex';
        e.target.innerText = 'arrow_drop_up';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
    .list{
        height: 300px;
    }
    .title{
        color: $light;
        background: #FFFFFF33;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        margin-bottom: 16px;
        h2,a{
            font-size: $font-s;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        row-gap: 9px;
        height: 237px;
        overflow-y: auto;
    }
    li{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 32px;
      color: $light;
      border-bottom:1px solid rgb(151, 151, 151);
      .playbutton{
        margin: 0 10px;
      }
      p{
          margin-left: 4px;
          margin-right: auto;
          line-height: 19px;
          font-size: 16px;
      }
      a{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
      }
      >span{
        display: block;
        color: $thirdA;
        font-size: 16px;
      }
    }
    .deleteline{
      text-decoration: line-through;
    }
</style>
