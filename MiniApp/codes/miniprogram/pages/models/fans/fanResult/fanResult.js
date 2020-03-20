var util = require('../../../../utils/util.js')
import * as echarts from '../../../../ec-canvas/echarts';
var initChart = null
let series = null
let legend = null
let options = {}
var app = getApp();
Page({
  data: {
    showView1: true,
    showView2: false,
    resultArray1: [],
    resultArray2: [],
    array: [],
    ec: {
      onInit: function(canvas, width, height) {
        initChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(initChart);
        return initChart;
      }
    }
  },
  navBack: function() {
    wx.switchTab({
      url: '/pages/models/models',
    })
  },
  resultlook: function() {
    this.setData({
      showView1: false,
      showView2: true
    })
    var url = ''
    if (app.globalData.fanId == 1) {
      url = app.globalData.basePath + 'learn/getResult/390/' + app.globalData.instance
    } else if (app.globalData.fanId == 2) {
      url = app.globalData.basePath + 'learn/getResult/392/' + app.globalData.instance
    }
    util.httpReq(url, {
      'openId':app.globalData.userId}, this.callback)
  },
  callback(data) {
    if(data.data != null){
      var that = this
      that.setData({
        resultArray1: data.data.res,
        legend: data.data.legend,
        series: data.data.series
      })
      that.initChartOption()
      that.arrayFunc()
    }
     else{
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
      arr.push(item)
    }
    arr.unshift(this.data.array[0])
    this.setData({
      resultArray2: arr
    })
  },
  initChartOption: function() {
    initChart.setOption({
      legend: {
        data: this.data.legend
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        },
        confine: true
      },
      grid: {
        left: 15,
        bottom: 15,
        containLabel: true
      },
      xAxis: [{
        type: 'value',
      }],
      yAxis: [{
        type: 'category',
        scale: true,
        data: ['召回率', '准确率', '精确率', 'F-Measure', 'ROC-Area']
      }],
      series: this.data.series
    })
  }
})