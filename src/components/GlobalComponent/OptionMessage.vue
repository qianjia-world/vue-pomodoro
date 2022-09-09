<template>
    <div class="tip" ref="options">
        <p>{{ msg }}</p>
        <div class="choice">
            <input type="button" value="取消">
            <input type="button" value="確定">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    msg() {
      return this.$store.state.optionMsg;
    },
  },
  methods:{
    close(){
      this.$refs.options.style.display = 'none';
      this.$store.commit('setOptionMsg', '');
    },
  },
  updated() {
    if (this.msg === '') return;
    this.$refs.tips.style.display = 'flex';
  },
};
</script>

<style lang="scss" scoped>
    .tip{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 130px;
        border-radius: 5%;
        border: 5px solid $primaryA;
        background-color: $secondaryA;
        display: none;
        justify-content: center;
        align-items: center;
    }
    p{
        font-size: $font-s;
        color: $primaryA;
    }
</style>
