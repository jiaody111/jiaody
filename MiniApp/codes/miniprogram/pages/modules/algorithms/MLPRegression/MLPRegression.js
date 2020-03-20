var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: 'adam',
    value2: 200,
    value3: 0.0001,
    value4: 0.0001,
    value5: 'None',
    showResult: false,
    hiddenmodalput: true,
    algoDescription: 'MLP算法：又称多层感知机或人工神经网络。在输入和输出层之间可以有多个隐藏层，如果没有隐藏层可解决线性可划分的数据问题。',
    dataDescription: '数据集：选取刀具磨损实验数据集的部分数据进行训练。',
    buttonText: '使用MLP算法训练数据'
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
      value4: e.detail.value
    })
  },
  ParamValue5Tap: function(e) {
    this.setData({
      value5: e.detail.value
    })
  },
  MLPTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/0/46/get_algorithm'
    util.httpReq(url, {
      'solver': that.data.value1,
      'max_iter': that.data.value2,
      'alpha': that.data.value3,
      'tol': that.data.value4,
      'random_state': that.data.value5
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