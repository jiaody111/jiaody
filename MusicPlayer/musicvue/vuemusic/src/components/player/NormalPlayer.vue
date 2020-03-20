<template>
<div class="normalPlayer" v-show="this.isFullScreen">
  <div class="player-wrapper">
    <PlayerHeader></PlayerHeader>
    <PlayerFooter></PlayerFooter>
  </div>
  <div class="playerBackground">
    <img :src="currentSong.picUrl" alt="">
  </div>
</div>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerFooter from './PlayerFooter'
import { mapGetters } from 'vuex'
export default {
  name: 'NormalPlayer',
  components: {
    PlayerHeader,
    PlayerFooter
  },
  computed: {
    ...mapGetters(['isFullScreen', 'currentSong'])
  }
}
</script>

<style scoped lang="scss">
.normalPlayer{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .player-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
  }
  .playerBackground{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    img{
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      filter: blur(1px);
    }
  }
}
</style>
