<template>
  <div class="miniplayer" v-show="this.isShowMiniPlayer">
    <div class="player-wrapper">
      <div class="playerLeft">
        <img @click='closeNormalPlayer' :src="currentSong.picUrl" alt="">
         <div class="playerTitle">
           <h3>{{currentSong.name}}</h3>
           <p>{{currentSong.singer}}</p>
         </div>
      </div>
      <div class="playerRight">
        <div class="play" @click.stop="miniplay" ref="miniplay"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions(['setFullScreen', 'setMiniShow', 'setIsPlaying', 'setListPlayerShow']),
    showList () {
      this.setListPlayerShow(true)
    },
    closeNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniShow(false)
    },
    miniplay () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  computed: {
    ...mapGetters(['isShowMiniPlayer', 'isPlaying', 'currentSong'])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        console.log('newValue' + newValue)
        this.$refs.miniplay.classList.add('active')
      } else {
        console.log('oldValue' + oldValue)
        this.$refs.miniplay.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
.miniplayer{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 150px;
  width: 100%;
  .player-wrapper{
    height: 100%;
    width: 100%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    .playerLeft{
      display: flex;
      padding-left: 30px;
      width: 50%;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .playerTitle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:500px;
        h3{
          @include font_size($font_medium);
        }
        p{
          @include font_size($font_medium_s);
        }
      }
    }
    .playerRight{
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        background: url("../../assets/images/play_163.png") no-repeat;
        background-size: cover;
        margin-right: 100px;
        &.active{
          background: url("../../assets/images/pause_163.png") no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
</style>
