<template>
  <div class="homeview">
    <main>
      <InputComponent></InputComponent>
      <NowToDoComponent></NowToDoComponent>
      <ListComponent></ListComponent>
    </main>
    <section>
      <ToggleButton></ToggleButton>
    </section>
    <nav>
      <NavLinkComponent></NavLinkComponent>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue';
import InputComponent from '../components/InputComponent.vue';
import NowToDoComponent from '../components/NowToDoComponent.vue';
import ListComponent from '../components/ListComponent.vue';
import userinfor from '../assets/UserInfor.json';
import ToggleButton from '../components/toggleButtonComponent.vue';
import NavLinkComponent from '../components/NavLinkComponent.vue';

export default {
  name: 'HomeView',
  components: {
    InputComponent,
    ListComponent,
    NowToDoComponent,
    ToggleButton,
    NavLinkComponent,
  },
  created() {
    this.$store.commit('setUser', userinfor);
  },
};
</script>

<style lang="scss"  scoped>
  .homeview{
    width: 1280px;
    height: 800px;
    display: flex;
    justify-content: space-between;
    padding: 48px 85px;
    background:linear-gradient(to right, #FFEDF7 65%,#003164 35%);
  }
  main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 445px;
  }
  section{
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
</style>
