<template>
    <div class="list">
        <div class="work">
            <div class="title">
                <h2>work</h2>
            </div>
            <ul class="musicList">
                <li v-for="item in songList" :key="item">
                  <a href=""
                  @click.prevent="playsound(item,'Work')"
                  @keydown.enter.prevent="playsound(item, 'Work')"
                  class="material-icons">
                  radio_button_unchecked</a>
                  <!-- radio_button_checked -->
                  {{ item }}</li>
            </ul>
        </div>
        <div class="break">
            <div class="title">
                <h2>break</h2>
            </div>
            <ul class="musicList">
                <li v-for="item in songList" :key="item">
                  <a href=""
                  @click.prevent="playsound(item,'Break')"
                  @keydown.enter.prevent="playsound(item, 'Break')"
                  class="material-icons">
                  radio_button_unchecked</a>
                  <!-- radio_button_checked -->
                  {{ item }}</li>
            </ul>
        </div>
    </div>
    <!-- <audio controls data-key="A Typical Ride Out" ref="audio">
      <source src="../../sounds/aaa.mp3" type="audio/mpeg">
      <track kind="captions"/>
    </audio> -->
    <!-- <img src="../../sounds/out-transparent-4.webp" alt=""> -->
</template>

<script>
export default {
  data() {
    return {
      work: 'none',
      break: 'none',
      songList: [
        'none',
        'Allegro',
        'RideOut',
        'Dreamland',
        'FonkeeRyde',
        'Forest',
        'Beauty',
        'JustStay',
        'Lament',
        'Surrender',
        'No.4Piano',
        'SkewlsOwt',
        'Teasing',
        'DeathParts',
        'Waiting',
      ],
    };
  },
  methods: {
    playsound(item, time) {
      this.$store.commit(`setAudio${time}`, item);
      // this.$store.getters.audio.play();
    },
  },
};
</script>

<style lang="scss" scoped>
  .list{
      display: flex;
      flex-direction: column;
      row-gap: 46px;
      color: $light;
  }
  .title{
      background: #FFFFFF33;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      margin-bottom: 16px;
      height: 44px;
      font-size: $font-s;
  }
  .musicList{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 16px;
  }
  li{
      display: flex;
      align-items: center;
      a{
          display: block;
          justify-content: center;
          align-items: center;
          margin-right: 4px;
      }
  }
.active{
  color: $thirdA;
}
</style>
