<template>
  <div>
    <div class="song">
      <div class="song-top">
        <h3>最新音乐</h3>
      </div>
      <ul class="song-list">
        <li v-for="song in NewSongs" :key="song.id" class="item" @click="selectMusic">
          <img v-lazy="song.picUrl" alt="">
          <div>
            <h3>{{song.name}}</h3>
            <p>{{song.singer}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NewSongs',
  props: {
    NewSongs: {
      required: true,
      default: () => [],
      type: Array
    }
  },
  methods: {
    ...mapActions(['setFullScreen']),
    selectMusic () {
      this.setFullScreen(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .song {
    .song-top{
      width: 100%;
      height: 84px;
      line-height: 84px;
      @include bg_sub_color();
      border-bottom: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 0 20px;
      h3{
        @include font_size($font_large);
        font-weight: bold;
        @include font_color();
      }
    }

    .song-top {
      width: 100%;
      height: 84px;
      line-height: 84px;
      border-bottom: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 0 20px;

      h3 {
        font-weight: bold;
      }
    }
    .song-list{
      width: 100%;
      overflow: hidden;
      .item{
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        /*margin-bottom: 20px;*/
        border-bottom: 1px solid #ccc;
        img{
          width: 100px;
          height: 100px;
          border-radius: 20px;
          margin-right: 20px;
        }
        div{
          width: 70%;
          h3{
            @include font_size($font_large);
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          p{
            @include font_size($font_samll);
            opacity: 0.6;
            margin-top: 20px;
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
