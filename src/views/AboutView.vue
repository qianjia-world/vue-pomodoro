<template>
<div class="aboutview">
  <nav>
    <ListLink></ListLink>
  </nav>
  <main>
    <keep-alive>
      <TodoList v-if="id === 'todolist'"></TodoList>
      <Analytics v-else-if="id === 'analytics'"></Analytics>
      <Ringtones v-else></Ringtones>
    </keep-alive>
    <!-- <component :is='TodoList'></component> -->
  </main>
  <aside>
    <router-link to="/"><span class="material-icons">
      clear
      </span></router-link>
    <router-link to="/"><span class="logo">POMODORO</span></router-link>
  </aside>
  <HourMeter></HourMeter>
</div>
</template>

<script>
import TodoList from '../components/about/TodoListComponent.vue';
import Analytics from '../components/about/AnalyticsComponent.vue';
import Ringtones from '../components/about/RingtonesComponent.vue';
import ListLink from '../components/about/ListLinkComponent.vue';
import HourMeter from '../components/about/HourMeterComponent.vue';

export default {
  components: {
    TodoList,
    Analytics,
    Ringtones,
    ListLink,
    HourMeter,
  },
  computed: {
    id() {
      return this.$route.params.options;
    },
  },
  data() {
    return {
      TodoList: false,
      Analytics: false,
      Ringtones: true,
    };
  },
};
</script>

<style lang="scss" scoped>
  .aboutview{
    width: 1280px;
    height: 800px;
    display: flex;
    justify-content: space-between;
    padding: 48px 85px;
    background:$primaryA;
    position: relative;
  }
  aside{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .material-icons{
      font-size: 48px;
    }
    .logo{
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: $font-s;
    line-height: 32px;
}
  }
  main{
    width: 445px;
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }
</style>
