var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: 'DecisionTreeClassifier',
    value2: 'SAMME',
    value3: 1.0,
    algoDescription: 'Adaboost算法：一种主要应用于分类问题的迭代算法。其核心思想是针对同一个训练集，训练不同的弱分类器 ，然后把这些弱分类器集合起来，构成一个更强的最终分类器。',
    dataDescription: '数据集：选取风机结冰故障预测数据集中的部分数据进行训练。',
    buttonText: '使用Adaboost算法训练数据',
    showResult: false,
    hiddenmodalput: true,
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
  AdaboostTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/1/4/get_algorithm'
    util.httpReq(url, {
      'base_estimator': that.data.value1,
      'algorithm': that.data.value2,
      'learning_rate': that.data.value3
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