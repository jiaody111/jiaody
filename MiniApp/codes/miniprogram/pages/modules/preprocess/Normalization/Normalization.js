var util = require('../../../../utils/util.js')
import * as echarts from '../../../../ec-canvas/echarts';
var chart = null
let options = {}
var app = getApp();
Page({
  data: {
    algoDescription:'归一化：数据归一化能让不同维度的特征在数值上有一定的比较性，以提高分类器的准确度。',
    dataDescription:'数据集：选取刀具磨损实验中几个不同特征的数据分布情况。',
    ec: {
      onInit: function(canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart);
        return chart;
      }
    }
  },
  showView: false,
  initChartTap() {
    var url = app.globalData.basePath + 'component/init_normalization'
    var data = {}
    util.httpReq(url, data, this.callback)
  },
  NormChartTap: function() {
    var url = app.globalData.basePath + 'component/get_normalization'
    var data = {}
    util.httpReq(url, data, this.callback)
  },
  initChartOption: function() {
    chart.setOption(this.data.options)
  },
  callback(data) {
    var that = this
    that.setData({
      options: data.data,
      showView: true
    })
    that.initChartOption()
  },
  initXlsTap: function() {
    var url = 'https://file.phmlearn.com/dataForNormalization.xls'
    util.xlsReq(url,{})
  },

  NormXlsTap: function() {
    var url = 'https://file.phmlearn.com/dataForNormalizationNormal(0,1).xls'
    util.xlsReq(url,{})
  }
})