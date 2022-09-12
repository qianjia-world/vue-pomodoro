<template>
  <ul>
    <li><router-link
     to="/about/todolist" class="router" :class="{active: ( id === 'todolist' )}">
     <span class="material-icons">
      list</span>to-do list</router-link>
      </li>
    <li><router-link
     to="/about/analytics"  class="router" :class="{active: ( id === 'analytics' )}">
     <span class="material-icons">
      insert_chart
      </span>analytics</router-link></li>
    <li><router-link
     to="/about/ringtones" class="router" :class="{active: ( id === 'ringtones' )}">
     <span class="material-icons">
      library_music
      </span>ringtones</router-link></li>
  </ul>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.options;
    },
  },
};
</script>

<style lang="scss" scoped>
  ul{
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }
  .router{
    font-size: $font-m;
    color: #FFFFFF33;
  }
  .material-icons{
    font-size: $font-m;
  }
  .active{
    color: $thirdA;
  }
  span{
    margin-right: 8px;
  }
</style>
