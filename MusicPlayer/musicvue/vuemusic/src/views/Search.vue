<template>
<div class="search">
  <div class="search-box">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==" alt="">
    <input type="text" placeholder="搜索歌曲、歌手、专辑" v-model="keywords" v-throttle="search">
  </div>
  <div class="search-hot">
    <h3>热门搜索</h3>
    <ul>
      <li v-for="hot in hots" :key="hot.first" @click.stop="selectHot(hot.first)">{{hot.first}}</li>
    </ul>
  </div>
  <div class="search-suggest" v-show="keywords !== ''">
    <ScrollView>
      <ul>
        <li v-for="song in songs" :key="song.id" @click.stop="selectMusic(song.id)">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==" alt="">
           <p>{{song.name}} - {{song.artists[0].name}}</p>
        </li>
      </ul>
    </ScrollView>
  </div>
</div>
</template>

<script>
import { getSearchHot, getSearchList } from '../request/index'
import { mapActions } from 'vuex'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Search',
  data () {
    return {
      keywords: '',
      hots: [],
      songs: []
    }
  },
  components: {
    ScrollView
  },
  methods: {
    ...mapActions(['setFullScreen', 'setSongDetail']),
    selectMusic (id) {
      this.setSongDetail([id])
      this.setFullScreen(true)
    },
    search () {
      if (this.keywords === '') {
        return
      }
      getSearchList({ keywords: this.keywords }).then(res => {
        this.songs = res.result.songs
      }).catch(error => {
        console.log(error)
      })
    },
    selectHot (name) {
      this.keywords = name
      this.search()
    }
  },
  created () {
    getSearchHot().then(res => {
      this.hots = res.result.hots
    }).catch(error => {
      console.log(error)
    })
  },
  directives: {
    throttle: {
      // 指令的定义
      inserted: function (el, obj) {
        let timerId = null
        let flag = true
        el.addEventListener('input', function () {
          if (!flag) return
          flag = false
          timerId && clearTimeout(timerId)
          timerId = setTimeout(function () {
            flag = true
            obj.value()
          }, 1000)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .search{
    position: fixed;
    left: 0;
    right: 0;
    top: 184px;
    bottom: 0;
    @include bg_sub_color();
    .search-box{
      display: flex;
      align-items: center;
      margin: 40px 20px;
      background: #ebecec;
      border-radius: 30px;
      border-bottom: 1px solid #ccc;
      /*height: 60px;*/
      img{
        width: 40px;
        height: 40px;
        margin-left: 20px;
      }
      input{
        border: none;
        outline: none;
        background: transparent;
        @include font_size($font_medium);
        height: 60px;
        margin-left: 20px;
      }
    }
    .search-suggest{
      position: fixed;
      left: 0;
      right: 0;
      top: 300px;
      bottom: 0;
      overflow: hidden;
      @include bg_sub_color();
      li{
        display: flex;
        align-items: center;
        padding: 20px 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        img{
          width: 40px;
          height: 40px;
        }
        p{
          margin-left: 20px;
          @include font_color();
          @include font_size($font_medium);
        }
      }
    }
    .search-hot{
      h3{
        @include font_color();
        @include font_size($font_medium);
        padding: 10px 20px;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          height: 60px;
          line-height: 60px;
          border: 1px solid #000;
          border-radius: 30px;
          padding: 0 20px;
          @include font_color();
          @include font_size($font_medium_s);
          margin: 10px 20px;
        }
      }
    }
    .search-history{
      margin-top: 20px;
      li{
        padding: 20px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        .history-left{
          display: flex;
          align-items: center;
          img{
            width: 40px;
            height: 40px;
          }
          p{
            margin-left: 20px;
            @include font_color();
            @include font_size($font_medium_s);
          }
        }
        .history-right{
          img{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
</style>
