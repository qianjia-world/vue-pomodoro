import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
    tipsMsg: '',
    optionMsg: '',
    minute: 0,
    second: 5,
    pomodoro: 0,
    countdown: false,
  },
  getters: {
    todo(state) {
      return state.user.todolist.todo;
    },
    done(state) {
      return state.user.todolist.done;
    },
    countdown(state) {
      return state.countdown;
    },
    showMinute(state) {
      return state.minute.toString().length !== 2 ? `0${state.minute.toString()}` : state.minute.toString();
    },
    showSecond(state) {
      return state.second.toString().length !== 2 ? `0${state.second.toString()}` : state.second.toString();
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    addTodo(state, payload) {
      state.user.todolist.todo.push(payload);
    },
    finishTodo(state, payload) {
      const todo = state.user.todolist.todo.find(((item) => item.uuid === payload));
      const index = state.user.todolist.todo.findIndex(((item) => item.uuid === payload));
      state.user.todolist.done.push(todo);
      state.user.todolist.todo.splice(index, 1);
    },
    setTipsMsg(state, payload) {
      state.tipsMsg = payload;
    },
    setOptionMsg(state, payload) {
      state.optionMsg = payload;
    },
    setMinute(state, payload) {
      state.minute = payload;
    },
    setSecond(state, payload) {
      state.second = payload;
    },
    setPomodoro(state, payload) {
      state.user.todolist.todo[0].pomodo = payload;
    },
    setCountdown(state, payload) {
      state.countdown = payload;
    },
  },
  actions: {
    openCountdown(context, e) {
      const countdown = setInterval(() => {
        if (context.state.countdown === false) {
          clearInterval(countdown);
          return;
        }
        if (context.state.minute === 0 && context.state.second === 0) {
          e.target.innerText = 'play_circle_filled';
          context.commit('setPomodoro', context.state.user.todolist.todo[0].pomodo + 1);
          context.commit('finishTodo', context.state.user.todolist.todo[0].uuid);
          context.commit('setMinute', 25);
          context.commit('setSecond', 0);
          context.commit('setCountdown', false);
          clearInterval(countdown);
        } else if (context.state.minute !== 0 && context.state.second === 0) {
          context.commit('setMinute', context.state.minute - 1);
          context.commit('setSecond', 59);
        } else {
          context.commit('setSecond', context.state.second - 1);
        }
      }, 1000);
    },
  },
  modules: {
  },
});
