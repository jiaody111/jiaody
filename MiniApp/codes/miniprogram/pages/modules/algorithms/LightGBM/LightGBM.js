var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: 100,
    value2: 0.1,
    value3: 1,
    value4: 'None',
    showResult: false,
    hiddenmodalput: true,
    algoDescription: 'LightGBM算法：实现GBDT算法的Boosting框架，支持高效率的并行训练，具有训练速度更快，内存消耗更低，准确率更高的优点，可用于排序，分类，回归及其他的机器学习任务中。',
    dataDescription: '数据集：选取刀具磨损实验数据集的部分数据进行训练。',
    buttonText: '使用LightGBM算法训练数据'
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
  LightGBMTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/0/48/get_algorithm'
    util.httpReq(url, {
      'n_estimators': that.data.value1,
      'learning_rate': that.data.value2,
      'max_depth': that.data.value3,
      'random_state': that.data.value4
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