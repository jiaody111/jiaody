var app = getApp()
var util = require('../../../../utils/util.js')
Page({
  data: {
    showView1: true,
    showView2:false,
    resultArray1: [],
    resultArray2: [],
    array: []
  },
  navBack: function() {
    wx.switchTab({
      url: '/pages/models/models',
    })
  },
  resultlook: function () {
    this.setData({
      showView1: false,
      showView2: true
    })
    var url = app.globalData.basePath + 'learn/getResult/484/' + app.globalData.instance
    util.httpReq(url, {
      'openId': app.globalData.userId
    }, this.callback)
  },
  callback(data) {
    if (data.data != null) {
      var that = this
      that.setData({
        resultArray1: data.data.res,
        legend: data.data.legend,
        series: data.data.series
      })
      that.arrayFunc()
    }
    else {
      wx.showModal({
        title: 'sorry!',
        content: '本实验未完成',
        showCancel: false,
        complete() {
          wx.switchTab({
            url: '/pages/models/models',
          })
        }
      })
    }
  },
  arrayFunc: function() {
    this.setData({
      array: this.data.resultArray1
    })
    var arr = []
    for (var i = 1; i <= this.data.array.length - 1; i++) {
      var item = []
      var temp = this.data.array[i]
      var name = this.data.array[i][0]
      for (var j = 1; j <= temp.length - 1; j++) {
        var t = temp[j]
        t = Number(t)
        t = t.toFixed(5)
        t = Number(t)
        item.push(t)
      }
      item.unshift(name)
      console.log(item)
      arr.push(item)
    }
    arr.unshift(this.data.array[0])
    this.setData({
      resultArray2: arr
    })
  }
})