<template>
  <div id="app">
    <Header></Header>
    <TabBar></TabBar>
    <keep-alive include="Singer,Search">
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script>
import Header from './components/Header'
import TabBar from './components/TabBar'
import Player from './views/Player'

export default {
  name: 'app',
  components: {
    Header,
    TabBar,
    Player
  }
}
</script>
<style lang="scss">
</style>
