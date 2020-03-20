var util = require('../../../../utils/util.js')
Page({
  data: {
    hiddenmodalput: true,
    fileName: '',
    showResult: false,
    showView1: false,
    dataSize: 500,
    array: [
      ['vibration_1', 'x轴方向振动信号'],
      ['vibration_2', 'y轴方向振动信号'],
      ['vibration_3', 'z轴方向振动信号'],
      ['current', '第一相电流信号']
    ],
    waveLayer: 3,
    windowLength: 10,
    algoDescription:'时频域特征提取：常用在分析非平稳信号中，适合某个局部时间点或时间段上信号的频谱分析，时频域特征针对某段长度得到的统计值有多个，比如小波能量谱等。',
    dataDescription:'数据集：截取5000条刀具实际切割过程中传感器数据，采样频率为25600Hz，其字段对应如下。可用db10小波进行1D多阶次离散小波分解，提取每个阶次的能量值作为特征值。',
    featureButton:'时频域特征处理后文件'
  },
  initXlsTap: function() {
    var url = 'https://file.phmlearn.com/dataForWavest.xls'
    util.xlsReq(url, {})
  },
  cancel: function() {
    this.setData({
      hiddenmodalput: true
    });
  },
  timeAndFrepTap: function() {
    this.setData({
      hiddenmodalput: false
    })
  },
  attribute1Tap: function(e) {
    this.setData({
      waveLayer: e.detail.value
    })
  },
  attribute2Tap: function(e) {
    this.setData({
      windowLength: e.detail.value
    })
  },
  submitbuttonTap: function() {
    if (this.data.waveLayer == 0 || this.data.windowLength == 0) {
      wx.showModal({
        title: '参数输入错误',
        content: '请输入大于零的参数',
        showCancel: false
      })
    } else {
      var that = this
      var url = 'https://phmlearn.com/wx/component/get_wave_feature'
      util.httpReq(url, {
        'waveLayer': that.data.waveLayer,
        'windowLength': that.data.windowLength
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
    var reg1 = /vibration_1_/
    var reg2 = /vibration_2_/
    var reg3 = /vibration_3_/
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
      'waveLayer': that.data.waveLayer,
      'windowLength': that.data.windowLength
    })
  }
})