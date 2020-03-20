import network from './network'

export const getBanner = () => network.get('banner?type=2')
export const getPersonalized = () => network.get('personalized?limit=6')
export const getAlbums = () => network.get('album/newest')
export const getNewSongs = () => network.get('personalized/newsong')
export const getPlayList = (data) => network.get('playlist/detail', data)
export const getAlbum = (data) => network.get('album', data)
export const getSongDetail = (data) => network.get('song/detail', data)
export const getSongURL = (data) => network.get('song/url', data)
export const getArtistsSongs = (data) => network.get('artists', data)
export const getHotArtists = () => {
  return new Promise(function (resolve, reject) {
    network.get('top/artists?offset=0&limit=5').then(result => {
      resolve(result.artists)
    }).catch(error => {
      reject(error)
    })
  })
}
export const getLetterArtists = (letter) => {
  return new Promise(function (resolve, reject) {
    const letterArtists = []
    network.all([
      network.get(`artist/list?offset=0&limit=5&cat=1001&initial=${letter}`),
      network.get(`artist/list?offset=0&limit=5&cat=1002&initial=${letter}`),
      network.get(`artist/list?offset=0&limit=5&cat=1003&initial=${letter}`),
      network.get(`artist/list?offset=0&limit=5&cat=2001&initial=${letter}`),
      network.get(`artist/list?offset=0&limit=5&cat=2002&initial=${letter}`),
      network.get(`artist/list?offset=0&limit=5&cat=2003&initial=${letter}`)
    ]).then(result => {
      result.forEach(item => {
        letterArtists.push(...item.artists)
      })
      resolve(letterArtists)
    }).catch(error => {
      reject(error)
    })
  })
}
export const getAllArtists = () => {
  return new Promise(function (resolve, reject) {
    const keys = ['hot']
    const list = [getHotArtists()]
    for (let i = 65; i < 91; i++) {
      const char = String.fromCharCode(i)
      keys.push(char)
      list.push(getLetterArtists(char))
    }
    network.all(list).then(result => {
      const obj = {}
      obj.keys = keys
      obj.list = result
      resolve(obj)
    }).catch(error => {
      reject(error)
    })
  })
}
export const getSearchList = (data) => network.get('search?type=1', data)
export const getSearchHot = () => network.get('search/hot')
