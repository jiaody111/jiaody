<template>
  <div class="playerheader">
    <span class="headerLeft" @click="closeNormalPlayer"></span>
    <span class="headerCenter">
                <h3>{{currentSong.name}}</h3>
        <p>{{currentSong.singer}}</p>
      </span>
    <span class="headerRight"></span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PlayerHeader',
  methods: {
    ...mapActions(['setFullScreen', 'setMiniShow']),
    closeNormalPlayer () {
      this.setFullScreen(false)
      this.setMiniShow(true)
    }
  },
  computed: {
    ...mapGetters(['currentSong'])
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";

  .playerheader {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: red;

    .headerLeft, .headerRight {
      width: 84px;
      height: 84px;
      margin-top: 8px;
      text-align: center;
    }

    .headerLeft {
      background-image: url("../../assets/images/down_163.png");
      background-size: cover;
    }

    .headerCenter {
      line-height: 50px;
      text-align: center;
      @include font_size($font_medium);
      color: white;
      font-weight: bold;
    }
  }
</style>
