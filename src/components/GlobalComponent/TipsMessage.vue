<template>
    <div class="tip" ref="tips">
        <p>{{ msg }}</p>
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
      return this.$store.state.tipsMsg;
    },
  },
  async updated() {
    if (this.msg === '') return;
    this.$refs.tips.style.display = 'flex';
    await setTimeout(() => {
      this.$refs.tips.style.display = 'none';
      this.$store.commit('setTipsMsg', '');
    }, '800');
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
