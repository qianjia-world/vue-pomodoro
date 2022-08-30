import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
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
  },
  actions: {
  },
  modules: {
  },
});
