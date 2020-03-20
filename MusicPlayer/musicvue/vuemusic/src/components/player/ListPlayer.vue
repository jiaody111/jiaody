<template>
<div class="listPlayer" v-show="this.isListPlayerShow">
<div class="listWrapper">
  <div class="listTop">
    <div class="listTopLeft">
      <div class="mode" @click="listmode" ref="mode"></div>
      <p v-if="this.modeType===0">循环播放</p>
      <p v-else-if="this.modeType===1">单曲循环</p>
      <p v-else>随机播放</p>
    </div>
    <div class="listTopRight">
      <div class="del"></div>
    </div>
  </div>
  <div class="listMiddle">
    <ScrollView ref="scrollview">
      <ul>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <div class="itemPlay"></div>
            <p>歌曲名</p>
          </div>
          <div class="itemRight">
            <div class="itemFav"></div>
            <div class="itemDel"></div>
          </div>
          <div class="itemRight">

          </div>
        </li>
      </ul>
    </ScrollView>
  </div>
  <div class="listBottom" @click="closeList">
    <p>关闭</p>
  </div>
</div>
</div>
</template>

<script>
import ScrollView from '../ScrollView'
import mode from '../../store/modeType'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ListPlayer',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['modeType', 'isListPlayerShow'])
  },
  components: {
    ScrollView
  },
  methods: {
    ...mapActions(['setModeType', 'setListPlayerShow']),
    closeList () {
      this.setListPlayerShow(false)
    },
    listmode () {
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
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.listPlayer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: gainsboro;

  .listWrapper {
    .listTop {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100px;
      align-items: center;

      .listTopLeft {
        display: flex;
        align-items: center;
        padding-left: 20px;

        .mode {
          width: 56px;
          height: 56px;
          margin-right: 20px;
          &.loop{
            background: url("../../assets/images/loop_163.png") no-repeat;
            background-size: cover;
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

        p {
          @include font_size($font_medium_s);
          @include font_color();
        }
      }

      .listTopRight {
        .del {
          width: 84px;
          height: 84px;
          @include bg_img('../../assets/images/small_del')
        }
      }
    }

    .listMiddle {
      height: 700px;
      overflow: hidden;

      ul {
        .item {
          border-top: 1px solid #ccc;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;

          .itemLeft {
            width: 70%;
            display: flex;
            align-items: center;

            .itemPlay {
              width: 56px;
              height: 56px;
              margin-right: 20px;
              @include bg_img('../../assets/images/small_play');
            }

            p {
              width: 80%;
              @include font_size($font_medium_s);
              @include font_color();
              @include no-wrap();
            }
          }

          .itemRight {
            display: flex;
            align-items: center;

            .item-favorite {
              width: 56px;
              height: 56px;
              @include bg_img('../../assets/images/small_un_favorite');

              &.active {
                @include bg_img('../../assets/images/small_favorite');
              }
            }

            .item-del {
              width: 52px;
              height: 52px;
              margin-left: 20px;
              @include bg_img('../../assets/images/small_close')
            }
          }
        }
      }
    }

    .listBottom {
      width: 100%;
      height: 100px;
      line-height: 100px;
      @include bg_color();

      p {
        text-align: center;
        color: #fff;
        @include font_size($font_medium);
      }
    }
  }
}
</style>
