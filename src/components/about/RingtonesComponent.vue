<template>
    <div class="list">
        <div class="work">
            <div class="title">
                <h2>work</h2>
            </div>
            <ul class="musicList">
                <li><a href="" class="material-icons">radio_button_unchecked</a>none</li>
                <li><a href="" @click.prevent="playsound($event)"
                 @keydown.enter.prevent="playsound($event)"
                 data-key="A Typical Ride Out" class="material-icons active">
                  radio_button_checked</a>Default</li>
                <li><a href="" @click.prevent="newplaysound()" class="material-icons"
                @keydown.enter.prevent="newplaysound()">radio_button_unchecked</a>alarm</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>alert</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>beep</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>bell</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>bird</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>bugle</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>digital</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>drop</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>horn</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>music</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>ring</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>warning</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>whistle</li>
            </ul>
        </div>
        <div class="break">
            <div class="title">
                <h2>break</h2>
            </div>
            <ul class="musicList">
                <li><a href="" class="material-icons">radio_button_unchecked</a>none</li>
                <li><a href="" class="material-icons active">radio_button_checked</a>Default</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>alarm</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>alert</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>beep</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>bell</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>bird</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>bugle</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>digital</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>drop</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>horn</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>music</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>ring</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>warning</li>
                <li><a href="" class="material-icons">radio_button_unchecked</a>whistle</li>
            </ul>
        </div>
    </div>
    <!-- <audio controls data-key="A Typical Ride Out" ref="audio">
      <source src="../../sounds/aaa.mp3" type="audio/mpeg">
      <track kind="captions"/>
    </audio> -->
    <img src="../../sounds/out-transparent-4.webp" alt="">
</template>

<script>
export default {
  data() {
    return {
      work: 'none',
      break: 'none',
    };
  },
  methods: {
    // playsound(e) {
    //   console.dir(this.$refs.audio);
    //   const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    //   if (!audio) return;
    //   e.target.classList.add('active');
    //   audio.currentTime = 0;
    //   audio.play();
    // },
    playsound() {
      console.log(this.audio);
    },
  },
  inject: ['audio'],

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
