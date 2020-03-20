var app = getApp()
var util = require('../../../../utils/util.js')
Page({
  data: {
    ml_Desp:' '
  },
  onShow: function (options) {
    var loginUrl = app.globalData.basePath + 'login'
    util.httpReq(loginUrl, {
      username: 'jiaody',
      password: 'lx960211'
    },function(){})
    if (app.globalData.fanId == 1)
    {
      this.setData({
        mlDesp:'使用GBDT集成算法进行训练',
        ml_Desp: '先对样本预处理并提取特征，然后使用GBDT算法训练，划分数据集，最后得到训练结果。'  
      })
      var groupInstanceUrl = app.globalData.basePath + 'labs/group/353'
      var instanceUrl = app.globalData.basePath + 'learn/create/' + app.globalData.groupInstance + '/390'
      util.httpReq(groupInstanceUrl,{},this.getGroupInstance)
      util.httpReq(instanceUrl, {}, this.getInstance)
    }else if(app.globalData.fanId == 2)
    {
      this.setData({
        mlDesp: '使用GBDT和RandomForest两种算法进行训练',
        ml_Desp: '先对样本预处理并提取特征，然后使用GBDT和RandomForest算法训练，划分数据集，并对训练结果进行对比分析。'
      })
      var groupInstanceUrl = app.globalData.basePath + 'labs/group/354'
      var instanceUrl = app.globalData.basePath + 'learn/create/' + app.globalData.groupInstance + '/392'
      util.httpReq(groupInstanceUrl, {}, this.getGroupInstance)
      util.httpReq(instanceUrl, {}, this.getInstance)
    }
  },
  getGroupInstance(data){
    app.globalData.groupInstance = data.data
  },
  getInstance(data){
    app.globalData.instance = data.data
  },
  navTo_OneClassSVM: function () {
    wx.navigateTo({
      url: "/pages/models/fans/OneClassSVM/OneClassSVM"
    })
  }
})