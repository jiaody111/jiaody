var util = require('../../../../utils/util.js')
var app = getApp();
Page({
  data: {
    page: '5/6',
    divider: 0.8,
    disabled: false,
    title: '5.数据集划分',
    illustration: '0.8表示以4:1的比例随机划分训练集和测试集'
  },
  formsubmit(e) {
    if (e.detail.value.dividerValue == 0 || e.detail.value.dividerValue >= 1) {
      wx.showModal({
        title: '参数输入有误',
        content: '请输入一个0到1的小数',
      })
    } else {
      var url = ''
      var that = this
      that.setData({
        disabled: true
      })
      if (app.globalData.fanId == 1) {
        url = app.globalData.basePath + '/learn/divider/390/' + app.globalData.instance
      } else if (app.globalData.fanId == 2) {
        url = app.globalData.basePath + '/learn/divider/392/' + app.globalData.instance
      }
      util.modelReq(url, {
        'type': 'random',
        'radio': e.detail.value.dividerValue,
        'dividerId': 1
      })
    }
  },
  nextPage: function () {
    var nextUrl = '/pages/models/fans/fanResult/fanResult'
    util.nextPage (nextUrl)
  },
  prevPage: function () {
    util.prevPage()
  }
})