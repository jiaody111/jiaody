import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
axios.defaults.baseURL = API_PROXY + 'http://music.it666.com:3666'
axios.defaults.timeout = 30000
export default {
  get (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post (url = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(url, data).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  all (list) {
    return new Promise(function (resolve, reject) {
      axios.all(list).then(result => {
        resolve(result)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
