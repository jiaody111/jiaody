import * as echarts from '../../../../ec-canvas/echarts'
var util = require('../../../../utils/util.js')
var initChart = null
let options = {}
var app = getApp();
Page({
  data: {
    page: '2/6',
    showView1: false,
    array1: ['特征重要性分析', 'PCA降维二维散点图', 'FFT频谱图'],
    objectArray: [{
        id: 0,
        name: '特征重要性分析'
      },
      {
        id: 1,
        name: 'PCA降维二维散点图'
      },
      {
        id: 2,
        name: 'FFT频谱图'
      }
    ],
    index1: 0,
    array2: ['vibration_1', 'vibration_2', 'vibration_3', 'current'],
    objectArray2: [{
        id: 0,
        name: 'vibration_1'
      },
      {
        id: 1,
        name: 'vibration_2'
      },
      {
        id: 2,
        name: 'vibration_3'
      },
      {
        id: 3,
        name: 'current'
      }
    ],
    index2: 0,
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
  bindPickerChange1(e) {
    this.setData({
      index1: e.detail.value
    })
    if (this.data.index1 == 2) {
      this.setData({
        showView1: true
      })
    } else {
      this.setData({
        showView1: false
      })
    }
  },
  bindPickerChange2(e) {
    this.setData({
      index2: e.detail.value
    })
  },
  nextPage: function() {
    var url = '/pages/models/cutters/timeFeature/timeFeature'
    util.nextPage(url)
  },
  prevPage: function() {
    util.prevPage()
  },
  graphsTap: function() {
    switch (this.data.index1) {
      default: {
        var url = 'https://phmlearn.com/wx/view/484/attribute/5'
        util.httpReq(url, {}, this.callback)
        break;
      }
      case '1':
        {
          var url = 'https://phmlearn.com/wx/view/429/attribute/7'
          util.httpReq(url, {}, this.callback)
          break;
        }
      case '2':
        {
          var url = 'https://phmlearn.com/wx/view/429/attribute/8'
          util.httpReq(url, {
            'attribute1': this.data.array2[this.data.index2]
          }, this.callback)
          break;
        }
    }
  },
  callback(data) {
    var that = this
    that.setData({
      options: data.data,
    })
    that.initChartOption()
  },
  initChartOption: function() {
    initChart.setOption(this.data.options)
  },
})