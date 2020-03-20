<template>
  <ul class="detail-bottom">
    <li v-for="value in playlist" :key="value.id" class="item" @click.stop="selectMusic(value.id)">
      <h3>{{value.name}}</h3>
      <p>{{value.al.name}} - {{value.ar[0].name}}</p>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DeatilFooter',
  props: {
    playlist: {
      type: Array,
      default: () => [],
      requires: true
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['setFullScreen', 'setSongDetail']),
    selectMusic (id) {
      this.setSongDetail([id])
      this.setFullScreen(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .detail-bottom{
    width: 100%;
    li{
      width: 100%;
      height: 120px;
      padding: 20px;
      box-sizing: border-box;
      @include bg_sub_color();
      border-bottom: 1px solid #ccc;
    }
    .bottom-top{
      display: flex;
      align-items: center;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      .bottom-icon{
        width: 60px;
        height: 60px;
        @include bg_img('../../assets/images/small_play');
        margin-right: 20px;
      }
      .bottom-title{
        @include font_color();
        @include font_size($font_large);
      }
    }
    .item{
      h3{
        @include font_color();
        @include font_size($font_medium);
        @include no-wrap();
      }
      p{
        @include font_color();
        @include font_size($font_samll);
        @include no-wrap();
        margin-top: 10px;
        opacity: 0.8;
      }
    }
  }
</style>
