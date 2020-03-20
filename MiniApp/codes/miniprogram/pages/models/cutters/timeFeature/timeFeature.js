var app = getApp()
var util = require('../../../../utils/util.js')
Page({
  data: {
    disabled: false,
    title: '3.特征提取',
    illustration: '使用TimeFeature对原始数据在时域下提取特征，包括均值，标准差，方差，偏度和峰峰值。\n 参数为10代表每10个样本取一组特征。',
    page: '3/6'
  },
  formsubmit(e) {
    if (e.detail.value.stepValue == 0) {
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
        url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/feature/6'
      util.modelReq(url, {
        '-t': e.detail.value.stepValue,
      })
    }
  },
  nextPage: function() {
    var nextUrl = "/pages/models/cutters/cutterAlgos/cutterAlgos"
    util.nextPage(nextUrl)
  },
  prevPage: function() {
    util.prevPage()
  }
})