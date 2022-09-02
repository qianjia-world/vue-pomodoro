<template>
  <InputComponent></InputComponent>
  <ListComponent></ListComponent>
  <ListComponent></ListComponent>
</template>

<script>
import InputComponent from '../InputComponent.vue';
import ListComponent from './ListComponent.vue';

export default {
  components: {
    InputComponent,
    ListComponent,
  },
};
</script>
