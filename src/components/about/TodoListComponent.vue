<template>
  <InputComponent></InputComponent>
  <ListComponent title="todo"></ListComponent>
  <ListComponent title="done"></ListComponent>
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
