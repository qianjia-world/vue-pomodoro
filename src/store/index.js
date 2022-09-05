import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
    tipsMsg: '',
  },
  getters: {
    todo(state) {
      return state.user.todolist.todo;
    },
    done(state) {
      return state.user.todolist.done;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    addTodo(state, payload) {
      state.user.todolist.todo.push(payload);
    },
    setTipsMsg(state, payload) {
      state.tipsMsg = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
