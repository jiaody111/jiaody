var util = require('../../../../utils/util.js')
var app = getApp();
Page({
  data: {
    hiddenmodalput: true,
    fileName: '',
    attrList: [],
    v1Array: [],
    v2Array: [],
    v3Array: [],
    currArray: [],
    dataSize: 500,
    array: [
      ['vibration_1', 'x轴方向振动信号'],
      ['vibration_2', 'y轴方向振动信号'],
      ['vibration_3', 'z轴方向振动信号'],
      ['current', '第一相电流信号']
    ],
    showResult: false,
    windowLength: 10,
    avgChecked: true,
    stdChecked: true,
    varChecked: true,
    skewChecked: true,
    kurChecked: true,
    ptpChecked: true,
    avg: 1,
    std: 1,
    var1: 1,
    skew: 1,
    kur: 1,
    ptp: 1,
    algoDescription: '时域特征提取：采用统计概率的方法，常用特征包括均值、标准差、方差、偏度值、峰度值和峰峰值等，并通过设置时间窗长度来确定从原始数据每隔多长提取一组特征。',
    dataDescription: '数据集：截取5000条刀具实际切割过程中传感器数据，采样频率为25600Hz，其字段对应如下，您可根据下表选择要提取的特征来确定最终的提取结果。',
    featureButton: '时域特征处理后文件'
  },
  initXlsTap: function() {
    var url = 'https://file.phmlearn.com/dataForTimeFeature.xls'
    util.xlsReq(url, {})
  },
  timeTap() {
    this.setData({
      hiddenmodalput: false
    })
  },
  avgChange: function(e) {
    if (e.detail.value == false) {
      this.setData({
        avg: 0
      })
    } else {
      this.setData({
        avg: 1
      })
    }
  },
  stdChange: function(e) {
    if (e.detail.value == false) {
      this.setData({
        std: 0
      })
    } else {
      this.setData({
        std: 1
      })
    }
  },
  varChange: function(e) {
    if (e.detail.value == false) {
      this.setData({
        var1: 0
      })
    } else {
      this.setData({
        var1: 1
      })
    }
  },
  skewChange: function(e) {
    if (e.detail.value == false) {
      this.setData({
        skew: 0
      })
    } else {
      this.setData({
        skew: 1
      })
    }
  },
  kurChange: function(e) {
    if (e.detail.value == false) {
      this.setData({
        kur: 0
      })
    } else {
      this.setData({
        kur: 1
      })
    }
  },
  ptpChange: function(e) {
    console.log(e.detail.value)
    if (e.detail.value == false) {
      this.setData({
        ptp: 0
      })
    } else {
      this.setData({
        ptp: 1
      })
    }
  },
  windowLengthTap: function(e) {
    this.setData({
      windowLength: e.detail.value
    })
  },
  cancel: function() {
    this.setData({
      hiddenmodalput: true
    });
  },
  timeDomainTap: function(e) {
    var that = this
    if ((that.data.avg == 0) && (that.data.std == 0) && (that.data.var1 == 0) && (that.data.skew == 0) && (that.data.kur == 0) && (that.data.ptp == 0)) {
      wx.showModal({
        title: '参数有误',
        content: '请至少选择一个特征再提交',
        showCancel: false,
      })
    } else {
      var that = this
      var url = 'https://phmlearn.com/wx/component/get_time_feature'
      util.httpReq(url, {
        'windowLength': that.data.windowLength,
        'avg': that.data.avg,
        'std': that.data.std,
        'var': that.data.var1,
        'skew': that.data.skew,
        'kur': that.data.kur,
        'ptp': that.data.ptp
      }, that.callback)
    }
  },
  callback(data) {
    var that = this
    that.setData({
      hiddenmodalput: true,
      fileName: data.data.fileName,
      attrList: data.data.attributeList,
      dataSize: data.data.dataSize
    })
    that.resultFunc()
  },
  resultFunc: function() {
    var reg1 = /v_1_/
    var reg2 = /v_2_/
    var reg3 = /v_3_/
    var reg4 = /current/
    var arr = this.data.attrList
    var arr1 = ["x轴方向特征"]
    var arr2 = ["y轴方向特征"]
    var arr3 = ["z轴方向特征"]
    var arr4 = ["电流信号特征"]
    for (var i = 0; i <= arr.length - 1; i++) {
      var t = arr[i]
      if (reg1.test(arr[i])) {
        arr1.push(t)
      }
      if (reg2.test(arr[i])) {
        arr2.push(t)
      }
      if (reg3.test(arr[i])) {
        arr3.push(t)
      }
      if (reg4.test(arr[i])) {
        arr4.push(t)
      }
    }
    this.setData({
      showResult: true,
      v1Array: arr1,
      v2Array: arr2,
      v3Array: arr3,
      currArray: arr4,
    })
  },
  xlsTap: function() {
    var that = this
    var url = 'https://file.phmlearn.com/' + that.data.fileName
    util.xlsReq(url, {
      'windowLength': that.data.windowLength,
      'avg': that.data.avg,
      'std': that.data.std,
      'var': that.data.var1,
      'skew': that.data.skew,
      'kur': that.data.kur,
      'ptp': that.data.ptp
    })
  }
})