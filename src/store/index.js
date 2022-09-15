import { createStore } from 'vuex';
import uuid from '../filter/uuid';
import dateToString from '../filter/dateToString';

export default createStore({
  state: {
    user: {
      name: '千迦',
      password: 1226,
      todolist: {
        done: [
          {
            name: '寫程式:接API',
            status: true,
            enddate: dateToString(),
            pomodo: 4,
            uuid: uuid(),
          },
          {
            name: '過去的過去',
            status: true,
            enddate: '2022-08-04',
            pomodo: 20,
            uuid: uuid(),
          },
          {
            name: 'buggggg!',
            status: true,
            enddate: '2022-08-16',
            pomodo: 90,
            uuid: uuid(),
          },
        ],
        todo: [
          {
            name: '看書:被討厭的勇氣',
            status: false,
            enddate: dateToString(),
            pomodo: 2,
            uuid: uuid(),
          },
          {
            name: '打掃:客廳浴室',
            status: false,
            enddate: dateToString(),
            pomodo: 1,
            uuid: uuid(),
          },
          {
            name: '學編程:Vue',
            status: false,
            enddate: dateToString(),
            pomodo: 4,
            uuid: uuid(),
          },
          {
            name: '複習知識:JS核心',
            status: false,
            enddate: dateToString(),
            pomodo: 4,
            uuid: uuid(),
          },
        ],
      },
    },
    tipsMsg: '',
    optionMsg: '',
    minute: 0,
    second: 5,
    pomodoro: 0,
    countdown: false,
    audioWork: {},
    audioBreak: {},
  },
  getters: {
    todo(state) {
      return state.user.todolist.todo;
    },
    done(state) {
      return state.user.todolist.done;
    },
    nowdoName(state) {
      return state.user.todolist.todo[0].name;
    },
    todoTop3(state) {
      return state.user.todolist.todo.slice(1, 4);
      // 錯誤在這，傳參考，splice會直接改到原陣列，傳參考
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
    audioWork(state) {
      return state.audioWork;
    },
    audioBreak(state) {
      return state.audioBreak;
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
      const todo = state.user.todolist.todo.find((item) => item.uuid === payload);
      todo.enddate = dateToString();
      const todoIndex = state.user.todolist.todo.indexOf(todo);
      state.user.todolist.done.push(todo);
      state.user.todolist.todo.splice(todoIndex, 1);
    },
    deleteTodo(state, payload) {
      const todo = state.user.todolist.todo.find((item) => item.uuid === payload);
      const todoIndex = state.user.todolist.todo.indexOf(todo);
      state.user.todolist.todo.splice(todoIndex, 1);
    },
    reTodo(state, payload) {
      const done = state.user.todolist.done.find((item) => item.uuid === payload);
      const doneIndex = state.user.todolist.done.indexOf(done);
      done.enddate = null;
      state.user.todolist.done.splice(doneIndex, 1);
      state.user.todolist.todo.unshift(done);
    },
    setTopTodo(state, payload) {
      const todo = state.user.todolist.todo.find((item) => item.uuid === payload);
      const todoIndex = state.user.todolist.todo.indexOf(todo);
      state.user.todolist.todo.splice(todoIndex, 1);
      state.user.todolist.todo.unshift(todo);
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
    setAudio(state, payload) {
      state.audioWork = payload.work;
      state.audioBreak = payload.break;
    },
    setAudioWork(state, payload) {
      // test1 404
      console.log(state.audioWork.children[0].src);
      state.audioWork.children[0].src = `../media/${payload}.mp3`;
      state.audioWork.load();// 404
      state.audioWork.play();
      // test2 require 報錯Unexpected require()；要用單引號
      // state.audioWork.src = `./sounds/${payload}.mp3`;
      // state.audioWork.children[0].src = require('./sounds/' + payload + '.mp3');
    },
    setAudioBreak(state, payload) {
      if (payload === '') {
        state.audioBreak.src = '';
      } else {
        state.audioBreak.src = `./sounds/${payload}.mp3`;
        state.audioBreak.play();
      }
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
          context.commit('setMinute', 0);
          context.commit('setSecond', 5);
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
