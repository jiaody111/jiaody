var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: 100,
    value2: 1,
    value3: 3,
    value4: 1,
    value5: 2,
    showResult: false,
    hiddenmodalput: true,
    algoDescription: 'GBDT算法：梯度提升决策树是一种广泛应用于二分类问题和回归问题的迭代决策树算法。该算法由多棵决策树组成，所有树的结论累加起来做最终答案，是一种泛化能力较强的算法。',
    dataDescription: '数据集：选取风机结冰故障预测数据集中的部分数据进行训练。',
    buttonText: '使用GBDT算法训练数据'
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
  GBDTTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/1/7/get_algorithm'
    util.httpReq(url, {
      'n_estimators': that.data.value1,
      'learning_rate': that.data.value2,
      'max_depth': that.data.value3,
      'min_samples_split': that.data.value4,
      'min_samples_leaf': that.data.value5
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