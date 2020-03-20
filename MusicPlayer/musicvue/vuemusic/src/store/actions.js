import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_IS_PLAYING,
  SET_MODE_TYPE,
  SET_LIST_PLAYER,
  SET_SONG_DETAIL
} from './mutations_type'
import { getSongDetail, getSongURL } from '../request/index'

export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setMiniShow ({ commit }, flag) {
    commit(SET_MINI_PLAYER, flag)
  },
  setIsPlaying ({ commit }, flag) {
    commit(SET_IS_PLAYING, flag)
  },
  setModeType ({ commit }, modetye) {
    commit(SET_MODE_TYPE, modetye)
  },
  setListPlayerShow ({ commit }, flag) {
    commit(SET_LIST_PLAYER, flag)
  },
  async setSongDetail  ({ commit }, ids) {
    const result = await getSongDetail({ ids: ids.join(',') })
    const urls = await getSongURL({ id: ids.join(',') })
    const list = []
    result.songs.forEach(function (value, i) {
      const obj = {}
      // obj.url = urls.data[i].url
      for (let j = 0; j < urls.data.length; j++) {
        const item = urls.data[j]
        if (value.id === item.id) {
          obj.url = item.url
          break
        }
      }
      obj.id = value.id
      obj.name = value.name
      let singer = ''
      value.ar.forEach(function (item, index) {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = value.al.picUrl
      list.push(obj)
    })
    commit(SET_SONG_DETAIL, list)
  }
}
