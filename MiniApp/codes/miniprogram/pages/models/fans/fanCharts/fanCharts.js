import * as echarts from '../../../../ec-canvas/echarts';
var util = require('../../../../utils/util.js')
var initChart = null
let baseUrl = 'https://phmlearn.com/wx/view/390/attribute/'
let compareBaseUrl = 'https://phmlearn.com/wx/view/392/attribute/'
let options = {}
let option = {}
var app = getApp();
Page({
  data: {
    title: '2.数据可视化',
    page: '2/6',
    showView1: false,
    showView2: false,
    array1: ['数据降维散点图', '单一属性故障分析', '二维属性故障分析'],
    objectArray: [{
        id: 0,
        name: '结冰故障降维散点图'
      },
      {
        id: 1,
        name: '单一属性故障分析'
      },
      {
        id: 2,
        name: '二维属性故障分析'
      }
    ],
    index1: 0,
    array2: ['风速', '发动机转速', '网侧有功功率', '对风角', '25秒平均风向角', '偏航位置', '偏航速度', '变桨电机1温度', '变桨电机2温度', '变桨电机3温度', 'x方向加速度', 'y方向加速度', '环境温度', '机舱温度', 'ng5 1温度', 'ng5 2温度', 'ng5 3温度', 'ng5 1充电器直流电流', 'ng5 2充电器直流电流', 'ng5 3充电器直流电流'],
    objectArray2: [{
        id: 0,
        name: 'wind_speed'
      },
      {
        id: 1,
        name: 'generator_speed'
      },
      {
        id: 2,
        name: 'power'
      },
      {
        id: 3,
        name: 'wind_direction'
      },
      {
        id: 4,
        name: 'wind_direction_mean'
      },
      {
        id: 5,
        name: 'yaw_position'
      },
      {
        id: 6,
        name: 'yaw_speed'
      },
      {
        id: 7,
        name: 'pitch1_moto_tmp'
      },
      {
        id: 8,
        name: 'pitch2_moto_tmp'
      },
      {
        id: 9,
        name: 'pitch3_moto_tmp'
      },
      {
        id: 10,
        name: 'acc_x'
      },
      {
        id: 11,
        name: 'acc_y'
      },
      {
        id: 12,
        name: 'environment_tmp'
      },
      {
        id: 13,
        name: 'int_tmp'
      },
      {
        id: 14,
        name: 'pitch1_ng5_tmp'
      },
      {
        id: 15,
        name: 'pitch2_ng5_tmp'
      },
      {
        id: 16,
        name: 'pitch3_ng5_tmp'
      },
      {
        id: 17,
        name: 'pitch1_ng5_DC',
      },
      {
        id: 18,
        name: 'pitch2_ng5_DC'
      },
      {
        id: 19,
        name: 'pitch3_ng5_DC'
      }
    ],
    index2: 0,
    array3: ['风速', '发动机转速', '网侧有功功率', '对风角', '25秒平均风向角', '偏航位置', '偏航速度', '变桨电机1温度', '变桨电机2温度', '变桨电机3温度', 'x方向加速度', 'y方向加速度', '环境温度', '机舱温度', 'ng5 1温度', 'ng5 2温度', 'ng5 3温度', 'ng5 1充电器直流电流', 'ng5 2充电器直流电流', 'ng5 3充电器直流电流'],
    objectArray3: [{
        id: 0,
        name: 'wind_speed'
      },
      {
        id: 1,
        name: 'generator_speed'
      },
      {
        id: 2,
        name: 'power'
      },
      {
        id: 3,
        name: 'wind_direction'
      },
      {
        id: 4,
        name: 'wind_direction_mean'
      },
      {
        id: 5,
        name: 'yaw_position'
      },
      {
        id: 6,
        name: 'yaw_speed'
      },
      {
        id: 7,
        name: 'pitch1_moto_tmp'
      },
      {
        id: 8,
        name: 'pitch2_moto_tmp'
      },
      {
        id: 9,
        name: 'pitch3_moto_tmp'
      },
      {
        id: 10,
        name: 'acc_x'
      },
      {
        id: 11,
        name: 'acc_y'
      },
      {
        id: 12,
        name: 'environment_tmp'
      },
      {
        id: 13,
        name: 'int_tmp'
      },
      {
        id: 14,
        name: 'pitch1_ng5_tmp'
      },
      {
        id: 15,
        name: 'pitch2_ng5_tmp'
      },
      {
        id: 16,
        name: 'pitch3_ng5_tmp'
      },
      {
        id: 17,
        name: 'pitch1_ng5_DC',
      },
      {
        id: 18,
        name: 'pitch2_ng5_DC'
      },
      {
        id: 19,
        name: 'pitch3_ng5_DC'
      }
    ],
    index3: 0,
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
    switch (this.data.index1) {
      case '0':
        var that = this;
        that.setData({
          showView1: false
        })
        that.setData({
          showView2: false
        })
        break;
      case '1':
        var that = this;
        that.setData({
          showView1: true
        })
        that.setData({
          showView2: false
        })
        break;
      case '2':
        var that = this;
        that.setData({
          showView1: true
        })
        that.setData({
          showView2: true
        })
        break;
    }
  },
  bindPickerChange2(e) {
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3(e) {
    this.setData({
      index3: e.detail.value
    })
  },
  graphsTap: function() {
    switch (this.data.index1) {
      default: {
        var url = baseUrl + this.data.index1
        util.httpReq(url, {}, this.callback)
        break;
      }
      case '1':
        {
          var url = baseUrl + this.data.index1
          util.httpReq(url, {
            'attribute1': this.data.objectArray2[this.data.index2].name
          }, this.callback)
          break;
        }
      case '2':
        {
          var url = baseUrl + this.data.index1
          util.httpReq(url, {
            'attribute1': this.data.objectArray2[this.data.index2].name,
            'attribute2': this.data.objectArray3[this.data.index3].name
          }, this.callback)
          console.log(this.data.objectArray2[this.data.index2].name)
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
  nextPage: function() {
    wx.navigateTo({
      url: '/pages/models/fans/window/window',
    })
  },
  prevPage: function() {
    util.prevPage()
  }
})