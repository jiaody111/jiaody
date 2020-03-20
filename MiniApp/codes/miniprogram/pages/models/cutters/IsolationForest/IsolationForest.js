var util = require('../../../../utils/util.js')
var app = getApp();
Page({
  data: {
    disabled: false,
    title: '1.数据预处理',
    illustration: '使用IsolationForest算法清除样本中的异常点',
    page: '1/6'
  },
  formsubmit(e) {
    if (e.detail.value.inputValue >= 1) {
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
      url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/feature/8'
      util.modelReq(url, {
        '-i': e.detail.value.inputValue
      })
    }
  },
  nextPage: function() {
    var nextUrl = '/pages/models/cutters/cutterCharts/cutterChart'
    util.nextPage(nextUrl)
  },
  prevPage: function() {
    util.prevPage()
  }
})