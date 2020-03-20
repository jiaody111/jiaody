<template>
<div class="recommend">
  <div class="recommend-warpper">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :Personalized="Personalized" :title="'推荐歌单'" :type="'personalized'" @select="fatherSelectItem"></Personalized>
        <Personalized :Personalized="albums" :title="'最新专辑'" :type="'albums'" @select="fatherSelectItem"></Personalized>
        <NewSongs :NewSongs="NewSongs"></NewSongs>
      </div>
    </ScrollView>
  </div>
  <transition>
    <router-view></router-view>
  </transition>
</div>
</template>
<script>
import Banner from '../components/recommend/Banner'
import Personalized from '../components/recommend/Personalized'
import ScrollView from '../components/ScrollView'
import NewSongs from '../components/recommend/NewSongs'
import { getBanner, getPersonalized, getAlbums, getNewSongs } from '../request/index'
export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized,
    ScrollView,
    NewSongs
  },
  data () {
    return {
      banners: [],
      Personalized: [],
      albums: [],
      NewSongs: []
    }
  },
  created () {
    getBanner().then(res => {
      this.banners = res.banners
    }).catch(error => {
      console.log(error)
    })
    getPersonalized().then(res => {
      this.Personalized = res.result
    }).catch(error => {
      console.log(error)
    })
    getAlbums().then(res => {
      this.albums = res.albums.splice(0, 6)
    }).catch(error => {
      console.log(error)
    })
    getNewSongs().then(res => {
      this.NewSongs = res.result
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    fatherSelectItem (id, type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend{
    position: fixed;
    top: 184px;
    left: 0;
    right: 0;
    bottom: 0;
  .recommend-warpper{
    width: 100%;
    height: 100%;
    overflow: hidden;
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
