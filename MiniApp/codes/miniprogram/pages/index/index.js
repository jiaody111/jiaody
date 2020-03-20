var app = getApp();
Page({
  data: {},
  getUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          app.globalData.userId = res.result.openid
          wx.request({
            url: 'https://phmlearn.com/wx/doLogin',
            data: {
              'nickName': app.globalData.userInfo.nickName,
              'openId': app.globalData.userId,
              'imgUrl': app.globalData.userInfo.avatarUrl
            },
            complete(res) {
              if (res.data.status == 0) {
                wx.switchTab({
                  url: '/pages/modules/modules',
                })
              } else {
                wx.showToast({
                  title: '请先登录',
                  icon: 'none'
                })
              }
            }
          })
        }
      })
    }
  },
  onShareAppMessage: function() {}
})