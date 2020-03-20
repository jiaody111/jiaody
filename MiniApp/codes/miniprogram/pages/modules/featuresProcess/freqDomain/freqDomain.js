var util = require('../../../../utils/util.js')
import * as echarts from '../../../../ec-canvas/echarts';
var chart = null
let options = {}
var app = getApp();
Page({
  data: {
    hiddenmodalput: true,
    array: [
      ['vibration_1', 'x轴方向振动信号'],
      ['vibration_2', 'y轴方向振动信号'],
      ['vibration_3', 'z轴方向振动信号'],
      ['current', '第一相电流信号']
    ],
    attribute: 'current',
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
    algoDescription:'频域特征提取：一般利用傅里叶变换，通过频谱分析在能量集中的对应频率处提取其能量作为特征值。',
    dataDescription:'数据集：部分刀具实际切割过程中传感器数据，采样频率为25600Hz，其字段对应如下，您可根据其频谱图提取对应频段内的能量作为特征值。'
  },
  attributeTap: function(e) {
    this.setData({
      attribute: e.detail.value
    })
  },
  frequencyTap: function() {
    this.setData({
      hiddenmodalput: false,
    })
  },
  cancel: function() {
    this.setData({
      hiddenmodalput: true
    });
  },
  freqDomainTap: function() {
    if (this.data.attribute === 'vibration_1' || this.data.attribute === 'vibration_2' || this.data.attribute === 'vibration_3' || this.data.attribute === 'current') {
    var that = this
    var url = 'https://phmlearn.com/wx/component/get_fft'
    util.httpReq(url, {
      'attribute': that.data.attribute
    }, that.callback)
    }
    else{
      wx.showModal({
        title: '参数输入错误',
        content: '请输入上述表格中其中某一字段作为特征值',
        showCancel:false
      })
    }
  },
  callback(data) {
    var that = this
    that.setData({
      options: data.data,
      hiddenmodalput: true
    })
    that.initChartOption()
  },
  initChartOption: function() {
    chart.setOption(this.data.options)
  },
})