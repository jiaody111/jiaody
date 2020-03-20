var util = require('../../../../utils/util.js')
Page({
  data: {
    TableArray: [],
    ChartArray: [],
    headerArray: [],
    header: [],
    algoName: '',
    value1: 'rbf',
    value2: 3,
    value3: 'auto',
    value4: 1.0,
    value5: 0.0001,
    showResult: false,
    hiddenmodalput: true,
    algoDescription: 'SVM算法：按监督学习方式对数据进行二元分类的广义线性分类器，其决策边界是对学习样本求解的最大边距超平面。但是该算法在PHM领域应用相对较少。',
    dataDescription: '数据集：选取风机结冰故障预测数据集中的部分数据进行训练。',
    buttonText: '使用SVM算法训练数据'
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
  SVMTap: function() {
    var that = this
    var url = 'https://phmlearn.com/wx/component/1/13/get_algorithm'
    util.httpReq(url, {
      'kernel': that.data.value1,
      'degree': that.data.value2,
      'gamma': that.data.value3,
      'C': that.data.value4,
      'tol': that.data.value5
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