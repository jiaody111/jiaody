<template>
  <div class="detail">
    <DetailHeader :listTitle="playlist.name"></DetailHeader>
    <DetailImg :imgsrc="playlist.coverImgUrl"></DetailImg>
    <div class="bottom">
      <ScrollView ref="scrollview">
        <DetailFooter :playlist="playlist.tracks"></DetailFooter>
      </ScrollView>
    </div>
  </div>
</template>
<script>
import { getPlayList, getAlbum, getArtistsSongs } from '../request/index'
import DetailHeader from '../components/Detail/DetailHeader'
import DetailImg from '../components/Detail/DetailImg'
import DetailFooter from '../components/Detail/DetailFooter'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailImg,
    DetailFooter,
    ScrollView
  },
  data () {
    return {
      playlist: {}
    }
  },
  created () {
    if (this.$route.params.type === 'personalized') {
      getPlayList({
        id: this.$route.params.id
      }).then(res => {
        this.playlist = res.playlist
      }).catch(error => {
        console.log(error)
      })
    } else if (this.$route.params.type === 'albums') {
      getAlbum({
        id: this.$route.params.id
      }).then(res => {
        console.log(res)
        this.playlist = {
          name: res.album.name,
          coverImgUrl: res.album.picUrl,
          tracks: res.songs
        }
      }).catch(error => {
        console.log(error)
      })
    } else if (this.$route.params.type === 'singer') {
      getArtistsSongs({
        id: this.$route.params.id
      }).then((data) => {
        this.playlist = {
          name: data.artist.name,
          coverImgUrl: data.artist.picUrl,
          tracks: data.hotSongs
        }
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.detail{
  position:fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  .bottom{
    position: fixed;
    top: 500px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
