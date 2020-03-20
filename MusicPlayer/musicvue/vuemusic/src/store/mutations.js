import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_IS_PLAYING,
  SET_MODE_TYPE,
  SET_LIST_PLAYER,
  SET_SONG_DETAIL
} from './mutations_type'
export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
  },
  [SET_IS_PLAYING] (state, flag) {
    state.isPlaying = flag
  },
  [SET_MODE_TYPE] (state, mode) {
    state.modeType = mode
  },
  [SET_LIST_PLAYER] (state, flag) {
    state.isListPlayerShow = flag
  },
  [SET_SONG_DETAIL] (state, list) {
    state.songs = list
  }
}
