<template>
  <div class="singer">
    <div class="singer-wrapper">
      <ScrollView ref="scrollView">
        <ul class="list-wrapper">
          <li v-for="(value,index) in list" :key="index" class="list-group" ref="group">
            <h2 class="group-title">{{keys[index]}}</h2>
            <ul>
              <li class="group-item" v-for="obj in list[index]" :key="obj.id" @click.stop="singerPage(obj.id)">
                <img v-lazy="obj.img1v1Url" alt="">
                <p>{{obj.name}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </ScrollView>
      <ul class="list-keys">
        <li v-for="(key,index) in keys" :key="key" @click.stop="keyDown(index)"
            :class="{active : currentIndex === index}">{{key}}</li>
      </ul>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getAllArtists } from '../request/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Singer',
  components: {
    ScrollView
  },
  methods: {
    keyDown (index) {
      this.$refs.scrollView.scrollTo(0, -(this.groupTop[index]))
      this.currentIndex = index
    },
    singerPage (id) {
      this.$router.push(`/singer/detail/${id}/singer`)
    }
  },
  data () {
    return {
      keys: [],
      list: [],
      groupTop: [],
      offsetY: '',
      currentIndex: 0
    }
  },
  created () {
    getAllArtists().then(res => {
      this.keys = res.keys
      this.list = res.list
    }).catch(error => {
      console.log(error)
    })
  },
  watch: {
    list () {
      this.$nextTick(() => {
        this.$refs.group.forEach(group => {
          this.groupTop.push(group.offsetTop)
        })
        console.log(this.groupTop)
      })
    }
  },
  mounted () {
    this.$refs.scrollView.scrolling(y => {
      if (y >= 0) {
        this.currentIndex = 0
      }
      for (let i = 0; i < this.groupTop.length; i++) {
        const preTop = this.groupTop[i]
        const nextTop = this.groupTop[i + 1]
        if (-y >= preTop && -y <= nextTop) {
          this.currentIndex = i
          return
        }
      }
      this.currentIndex = this.groupTop.length - 1
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .singer{
    width: 100%;
    height: 100%;
    .singer-wrapper{
      position: fixed;
      top: 184px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      @include bg_sub_color();
      .list-wrapper{
        /*width: 100%;*/
        /*height: 100%;*/
        .list-group{
          .group-title{
            @include bg_color();
            @include font_size($font_medium);
            color: #fff;
            padding: 10px 20px;
            box-sizing: border-box;
          }
          .group-item{
            display: flex;
            justify-content: flex-start;
            padding: 10px 20px;
            border-bottom: 1px solid #ccc;
            img{
              width: 100px;
              height: 100px;
              border-radius: 50%;
              overflow: hidden;
            }
            p{
              @include font_size($font_medium);
              @include font_color();
              display: flex;
              align-items: center;
              margin-left: 20px;
            }
          }
        }
      }
      .list-keys{
        position: fixed;
        right: 10px;
        top: 60%;
        transform: translateY(-50%);
        li{
          @include font_color();
          @include font_size($font_medium_s);
          padding: 3px 0;
          &.active{
            text-shadow: 0 0 10px #000;
          }
        }
      }
      .fix-title{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        padding: 10px 20px;
        box-sizing: border-box;
        @include font_size($font_medium);
        color: #fff;
        @include bg_color();
      }
    }
  }
  .v-enter{
    transform: translateX(100%);
  }
  .v-enter-to{
    transform: translateX(0%);
  }
  .v-enter-active{
    transition: transform 1s;
  }
  .v-leave{
    transform: translateX(0%);
  }
  .v-leave-to{
    transform: translateX(100%);
  }
  .v-leave-active{
    transition: transform 1s;
  }
</style>
