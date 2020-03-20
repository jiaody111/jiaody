var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: 1,
    value2: 'None',
    value3: 10,
    value4: 2,
    value5: 1,
    showResult: false,
    hiddenmodalput: true,
    algoDescription: 'RF回归算法：当cart树是回归树时，随机森林应用于回归问题。采用最小均方差原则，预测值是所有树的预测值的平均值。',
    dataDescription: '数据集：选取刀具磨损实验数据集的部分数据进行训练。',
    buttonText: '使用RF回归算法训练数据'
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
  RFTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/0/44/get_algorithm'
    util.httpReq(url, {
      'n_jobs': that.data.value1,
      'max_depth': that.data.value2,
      'n_estimators': that.data.value3,
      'min_samples_leaf': that.data.value5,
      'min_samples_split': that.data.value4
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