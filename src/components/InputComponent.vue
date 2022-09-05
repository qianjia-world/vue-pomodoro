<template>
    <div class="inputbox">
        <label for="writeTodo">
            <input type="text" id="writeTodo"
            placeholder="add a new mission…"
            v-model="todo"
            @keydown.enter="addTodo()" >
        </label>
        <a href="#" @click.prevent="addTodo()"><span class="material-icons">add</span></a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addTodo() {
      if (!this.todo) {
        this.$store.commit('setTipsMsg', '訊息內容不可為空');
        return;
      }
      const todo = {
        name: this.todo,
        status: false,
        enddate: null,
        pomodoro: 0,
        totalpomodoro: 0,
      };
      this.$store.commit('addTodo', todo);
      this.$store.commit('setTipsMsg', '新增成功');
      this.todo = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.inputbox{
    position: relative;
}
input{
    width: 100%;
    height: 56px;
    padding-left: 17px;
    border-style: none;
    outline: none;
    &::placeholder{
        color: $thirdA;
        text-transform: uppercase;
        font-weight: bold;
        font-style: italic;
    }
    &:focus{
        border: 1px solid $thirdA;
    }
}

a{
    color: $thirdA;
    position: absolute;
    top:30%;
    right: 5%;
}
</style>
