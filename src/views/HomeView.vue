<template>
  <main>
    <InputComponent></InputComponent>
    <NowToDoComponent></NowToDoComponent>
    <ListComponent></ListComponent>
  </main>
  <section>
    <div class="round-border">
      <div class="round">
        <a href="#" class="material-icons">
            play_circle_filled
        </a>
      </div>
      <span class="material-icons">
        stop
      </span>
    </div>
  </section>
  <nav>
    <ul>
      <li><a href="./todoList.html"><span class="material-icons">
          list
          </span></a>
          </li>
      <li><a href="./analytics.html"><span class="material-icons">
          insert_chart
          </span></a></li>
      <li><a href="./ringtones.html"><span class="material-icons">
          library_music
          </span></a></li>
    </ul>
    <span class="logo">POMODORO</span>
  </nav>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue';
import InputComponent from '../components/InputComponent.vue';
import NowToDoComponent from '../components/NowToDoComponent.vue';
import ListComponent from '../components/ListComponent.vue';

export default {
  name: 'HomeView',
  components: {
    InputComponent,
    ListComponent,
    NowToDoComponent,
  },
};
</script>
