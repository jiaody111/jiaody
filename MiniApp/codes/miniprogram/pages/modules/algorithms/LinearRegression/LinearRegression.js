var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: true,
    value2: false,
    value3: true,
    value4: 1,
    showResult: false,
    hiddenmodalput: true,
    algoDescription: 'LR算法：利用线性回归方程的最小平方函数对一个或多个自变量和因变量之间关系进行建模的一种回归分析，常用于拟合线性关系的曲线。',
    dataDescription: '数据集：选取刀具磨损实验数据集的部分数据进行训练。',
    buttonText: '使用LR算法训练数据'
  },
  showModal() {
    this.setData({
      hiddenmodalput: false
    })
  },
  cancel: function() {
    this.setData({
      hiddenmodalput: true
    });
  },
  ParamValue1Tap: function(e) {
    this.setData({
      value1: e.detail.value
    })
  },
  ParamValue2Tap: function(e) {
    this.setData({
      value2: e.detail.value
    })
  },
  ParamValue3Tap: function(e) {
    this.setData({
      value3: e.detail.value
    })
  },
  ParamValue4Tap: function(e) {
    this.setData({
      value5: e.detail.value
    })
  },
  LRTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/0/43/get_algorithm'
    util.httpReq(url, {
      'copy_X': that.data.value1,
      'normalize': that.data.value2,
      'fit_intercept': that.data.value3,
      'n_jobs': that.data.value4
    }, that.callback)
  },
  callback(data) {
    var that = this
    that.setData({
      TableArray: data.data,
      headerArray: data.data[0],
      algoName: data.data[1][0],
      showResult: true,
      hiddenmodalput: true
    })
    that.arrayFunc()
  },
  arrayFunc: function() {
    var resultArray = this.data.TableArray[1]
    var oneArray = []
    var tableArray = []
    var chartArray = []
    for (var i = 1; i <= resultArray.length - 1; i++) {
      var item = resultArray[i]
      chartArray.push(item)
      item = Number(item)
      item = item.toFixed(5)
      item = Number(item)
      oneArray.push(item)
    }
    oneArray.unshift(this.data.algoName)
    tableArray.push(oneArray)
    tableArray.unshift(this.data.headerArray)
    this.setData({
      TableArray: tableArray,
      ChartArray: chartArray
    })
  }
})