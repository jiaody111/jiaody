var app = getApp();
var util = require('../../../../utils/util.js')
Page({
  data: {
    winStatus: 1,
    current: 3,
    title: '3.特征提取',
    illustration: '使用Window时间窗对特征进行处理',
    disabled: false,
    page: '3/6'
  },
  formsubmit(e) {
    if (e.detail.value.windowLength == 0 || e.detail.value.stepLength == 0) {
      wx.showModal({
        title: '参数输入有误',
        content: '请输入大于0的参数',
      })
    } else {
      var url = ''
      var that = this
      that.setData({
        disabled: true
      })
      if (app.globalData.fanId == 1) {
        url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/feature/2'
      } else if (app.globalData.fanId == 2) {
        url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/feature/2'
      }
      util.modelReq(url, {
        '-L': e.detail.value.windowLength,
        '-S': e.detail.value.windowLength
      })
    }
  },
  nextPage: function () {
    var nextUrl = '/pages/models/fans/fanAlgos/fanAlgos'
    util.nextPage(nextUrl)
  },
  prevPage: function () {
    util.prevPage()
  }
})