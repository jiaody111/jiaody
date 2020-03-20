var util = require('../../../../utils/util.js')
var app = getApp();
Page({
  data: {
    mlDesp: '使用LightGBM算法训练样本数据',
    ml_Desp: '先对样本预处理并提取特征，然后使用LightGBM算法训练，划分数据集，最后得到训练结果。'
  },
  onShow: function(options) {
    var loginUrl = app.globalData.basePath + 'login'
    util.httpReq(loginUrl, {
      username: 'jiaody',
      password: 'lx960211'
    }, function() {})
    if (app.globalData.cutterId == 3) {
      this.setData({
        mlDesp: '使用LightGBM算法训练样本数据',
        ml_Desp: '先对样本预处理并提取特征，然后使用LightGBM算法训练，划分数据集，最后得到训练结果。'
      })
    } else if (app.globalData.cutterId == 4) {
      this.setData({
        mlDesp: '使用两种算法进行训练',
        ml_Desp: '先对样本预处理并提取特征，然后使用两种算法训练，划分数据集，并对训练结果进行对比分析。'
      })
    }
    var groupInstanceUrl = app.globalData.basePath + 'labs/group/426'
    var instanceUrl = app.globalData.basePath + 'learn/create/' + app.globalData.groupInstance + '/484'
    util.httpReq(groupInstanceUrl, {}, this.getGroupInstance)
    util.httpReq(instanceUrl, {}, this.getInstance)
  },
  getGroupInstance(data) {
    app.globalData.groupInstance = data.data
  },
  getInstance(data) {
    app.globalData.instance = data.data
  },
  navTo_IsolationForest: function() {
    wx.navigateTo({
      url: "/pages/models/cutters/IsolationForest/IsolationForest"
    })
  }
})