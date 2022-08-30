<template>
  <nav>
    <ul>
      <li class="active"><a href="./todoList.html"><span class="material-icons">
        list</span>to-do list</a>
        </li>
      <li><a href="./analytics.html"><span class="material-icons">
        insert_chart
        </span>analytics</a></li>
      <li><a href="./ringtones.html"><span class="material-icons">
        library_music
        </span>ringtones</a></li>
    </ul>
  </nav>
  <section>
    <div class="time">
    <h1>25:00</h1>
    <p>the First thing to do today</p>
    <div class="button"><a href="">1</a></div>
    </div>
  </section>
  <main>
    <component :is='TodoList'></component>
  </main>
  <aside>
    <a href=""><span class="material-icons">
      clear
      </span></a>
    <a href=""><span class="logo">POMODORO</span></a>
  </aside>
</template>

<script>
import TodoList from '../components/pages/TodoListComponent.vue';
import Analytics from '../components/pages/AnalyticsComponent.vue';
import Ringtones from '../components/pages/RingtonesComponent.vue';

export default {
  components: {
    TodoList,
    Analytics,
    Ringtones,
  },
};
</script>
