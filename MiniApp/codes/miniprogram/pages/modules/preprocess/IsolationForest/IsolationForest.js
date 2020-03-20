var util = require('../../../../utils/util.js')
import * as echarts from '../../../../ec-canvas/echarts';
var isoChart = null
let options = {}
var app = getApp();
Page({
  data: {
    showView: false,
    text: '异常点检测',
    status: 1,
    contamination: 0.02,
    ec: {
      onInit: function(canvas, width, height) {
        isoChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(isoChart);
        return isoChart;
      }
    },
    algoDescription: 'IsolationForest算法：检测样本中的异常值。',
    dataDescription: '数据集：部分刀具实际切割过程中传感器的原始数据：-1是异常数据，1是正常数据。'
  },
  formsubmit(e){
    console.log(e.detail.value.input_contamination)
    if (e.detail.value.input_contamination == 0 || e.detail.value.input_contamination > 1){
      wx.showModal({
        title: '参数输入错误',
        content: '请输入一个0到1的小数',
        showCancel: false
      })
    }else{
      this.setData({
        contamination:e.detail.value.input_contamination
      })
      var url = app.globalData.basePath + 'component/get_isolation'
      util.httpReq(url, { 'contamination': e.detail.value.input_contamination }, this.callback)
    }
  },
  initChartOption: function() {
    isoChart.setOption(this.data.options)
  },
  callback(data) {
    var that = this
    that.setData({
      options: data.data,
      showView: true
    })
    that.initChartOption()
  },
  clearTap: function() {
    var url = app.globalData.basePath + 'component/clear_isolation'
    util.httpReq(url, {
      'contamination': this.data.contamination
    }, this.callback)   
  }
})