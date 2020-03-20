export default {
  isFullScreen (state) {
    return state.isFullScreen
  },
  isShowMiniPlayer (state) {
    return state.isShowMiniPlayer
  },
  isPlaying (state) {
    return state.isPlaying
  },
  modeType (state) {
    return state.modeType
  },
  isListPlayerShow (state) {
    return state.isListPlayerShow
  },
  songs  (state) {
    return state.songs
  },
  currentSong  (state) {
    let obj = {
      name: '',
      singer: '',
      picUrl: null,
      url: null
    }
    if (state.songs.length !== 0) {
      obj = state.songs[state.currentIndex]
    }
    return obj
  }
}
