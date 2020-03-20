<template>
    <div class="playfooter">
      <div class="musicControl">
        <div class="mode loop" @click="playmode" ref="mode"></div>
        <div class="prev"></div>
        <div class="play" @click="playMusic" ref="play"></div>
        <div class="next"></div>
        <div class="favorite"></div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mode from '../../store/modeType'
export default {
  name: 'PlayerFooter',
  computed: {
    ...mapGetters(['isPlaying', 'modeType'])
  },
  methods: {
    ...mapActions(['setIsPlaying', 'setModeType']),
    playMusic () {
      this.setIsPlaying(!this.isPlaying)
    },
    playmode () {
      if (this.modeType === mode.loop) {
        this.setModeType(mode.one)
      } else if (this.modeType === mode.one) {
        this.setModeType(mode.random)
      } else if (this.modeType === mode.random) {
        this.setModeType(mode.loop)
      }
    }
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    modeType (newValue, oldValue) {
      if (newValue === mode.loop) {
        this.$refs.mode.classList.remove('random')
        this.$refs.mode.classList.add('loop')
      } else if (newValue === mode.one) {
        this.$refs.mode.classList.remove('loop')
        this.$refs.mode.classList.add('one')
      } else if (newValue === mode.random) {
        this.$refs.mode.classList.remove('one')
        this.$refs.mode.classList.add('random')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .playfooter{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .musicControl{
      width: 80%;
      margin: 0 auto;
      padding: 50px 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        width: 84px;
        height: 84px;
        background: url("../../assets/images/loop_163.png") no-repeat;
        background-size:cover;
      }
      .mode{
        &.loop{
          background: url("../../assets/images/loop_163.png") no-repeat;
          background-size:cover;
        }
        &.one{
          background: url("../../assets/images/one_163.png") no-repeat;
          background-size:cover;
        }
        &.random{
          background: url("../../assets/images/shuffle_163.png") no-repeat;
          background-size:cover;
        }
      }
      .prev{
        background: url("../../assets/images/prev_163.png") no-repeat;
        background-size:cover;
      }
      .play {
        background: url("../../assets/images/play_163.png") no-repeat;
        background-size: cover;
        &.active{
          background: url("../../assets/images/pause_163.png") no-repeat;
          background-size: cover;
        }
      }
      .next{
        background: url("../../assets/images/next_163.png") no-repeat;
        background-size: cover;
      }
      .favorite{
        background: url("../../assets/images/favorite_163.png") no-repeat;
        background-size: cover;
      }
    }
  }
</style>
