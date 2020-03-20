var util = require('../../../../utils/util.js')
import * as echarts from '../../../../ec-canvas/echarts';
var chart = null
let initOptions = {}
let options = {}
var app = getApp();
Page({
  data: {
    url: '',
    Ratio: '',
    name: '',
    status: 1,
    ec: {
      onInit: function(canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart);
        return chart;
      }
    },
    algoDescription:'SMOTE算法：对非均衡样本预处理，解决在故障预测时可能会存在的数据不均衡的问题。',
    dataDescription:'数据集：部分风机风速仪和温度传感器数据，其中1是少数类样本，0是正常样本。'
  },
  formsubmit(e) {
    if (e.detail.value.input_kneighbors == 0 || e.detail.value.input_ratio == 0) {
      wx.showModal({
        title: '参数输入错误',
        content: '请重新输入参数后提交',
        showCancel: false
      })
    }else{
      this.setData({
        url : app.globalData.basePath + 'component/get_smote'
      })
      util.httpReq(this.data.url, {
        'k_neighbors': e.detail.value.input_kneighbors,
        'ratio': e.detail.value.input_ratio
      }, this.callback)
    }
  },
  initChartOption: function() {
    chart.setOption(this.data.options)
  },
  initChartTap() {
    this.setData({
      url: app.globalData.basePath + 'component/init_smote',
    })
    util.httpReq(this.data.url, {}, this.callback)
  },
  callback: function(data) {
    var Url = this.data.url
    switch (Url) {
      case app.globalData.basePath + 'component/init_smote':
        {
          this.setData({
            name: '非均衡数据: '
          })
          break;
        }
      case app.globalData.basePath + 'component/get_smote':
        {
          this.setData({
            name: '均衡数据: '
          })
          break;
        }
    }
    var that = this
    that.setData({
      options: data.data.option,
      status: data.status,
      Ratio: data.data.ratio,
    })
    that.initChartOption()
  },
})