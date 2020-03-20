var app = getApp()
var util = require('../../../../utils/util.js')
Page({
  data: {
    disabled: false,
    page: '5/6',
    divider: 0.8,
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
      var that = this
      that.setData({
        disabled: true
      })
      var url = app.globalData.basePath + '/learn/divider/484/' + app.globalData.instance
      util.modelReq(url, {
        'type': 'random',
        'radio': e.detail.value.dividerValue,
        'dividerId': 1
      })
    }
  },
  nextPage: function () {
    var nextUrl = '/pages/models/cutters/cutterResult/cutterResult'
    util.nextPage( nextUrl)
  },
  prevPage: function () {
    util.prevPage()
  }
})