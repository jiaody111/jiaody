var util = require('../../../../utils/util.js')
var app = getApp();
Page({
  data: {
    title: '1.数据预处理',
    disabled:false,
    illustration: '使用OneClassSVM算法检测异常点并清除',
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
        disabled:true
      })
      if (app.globalData.fanId == 1) {
        url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/feature/7'
      } else if (app.globalData.fanId == 2) {
        url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/feature/7'
      }
      util.modelReq(url, {
        '-o': e.detail.value.inputValue
      })
    }
  },
  nextPage: function() {
    var nextUrl = '/pages/models/fans/fanCharts/fanCharts'
    util.nextPage(nextUrl)
  },
  prevPage: function() {
    util.prevPage()
  }
})