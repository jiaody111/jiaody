var util = require('../../../../utils/util.js')
Page({
  data: {
    hiddenmodalput: true,
    showView1: false,
    dimension: 3,
    fileName: '',
    tableName: [],
    showResult: false,
    algoDescription: 'PCA主成分分析：提取数据的主要特征分量，对高维数据进行降维处理，忽略对数据描述不重要的特征，从而降低计算量，提高准确率。',
    dataDescription: '数据集：选取刀具切割的传感器数据，归一化之后共有1000条数据，84个特征，在训练之前采用PCA对数据进行降维。'
  },
  initXlsTap: function() {
    var url = 'https://file.phmlearn.com/dataForPCA.xls'
    util.xlsReq(url, {})
  },
  dimensionTap: function() {
    this.setData({
      hiddenmodalput: false
    })
  },
  attributeTap: function(e) {
    this.setData({
      dimension: e.detail.value
    })
  },
  cancel: function() {
    this.setData({
      hiddenmodalput: true
    });
  },
  submitbuttonTap: function() {
    this.setData({
      showResult: true
    })
    if (this.data.dimension == 0 || this.data.dimension >= 80) {
      wx.showModal({
        title: '参数输入错误',
        content: '请输入一个0到80的整数',
        showCancel: false
      })
    } else {
      var that = this
      var url = 'https://phmlearn.com/wx/component/get_pca'
      util.httpReq(url, {
        'dimension': that.data.dimension
      }, that.callback)
    }
  },
  callback(data) {
    var that = this
    that.setData({
      fileName: data.data.fileName,
      tableName: data.data.ratio,
      hiddenmodalput: true
    })
    that.arrayFunc()
  },
  xlsTap: function() {
    var that = this
    var url = 'https://file.phmlearn.com/' + that.data.fileName
    util.xlsReq(url, {
      'dimension': that.data.dimension
    })
  },
  arrayFunc: function() {
    this.setData({
      array: this.data.tableName
    })
    var arr = []
    for (var i = 0; i <= this.data.array.length - 1; i++) {
      var temp = this.data.array[i]
      temp = Number(temp)
      temp = temp.toFixed(4)
      temp = Number(temp)
      arr.push(temp)
    }
    this.setData({
      tableName: arr
    })
  },
})