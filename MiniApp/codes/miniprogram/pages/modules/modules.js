// pages/modules/modules.js
Page({
  data: {
    headerText: ['数据预处理', '特征提取', '故障诊断算法', '寿命预测算法'],
    proprecessItems: ['数据均衡化', '数据归一化', '异常点检测'],
    featuresItems: ['时域', '频域', '时频域', '特征降维'],
    faultDiagAlgos: ['梯度下降树', '随机森林分类', 'Adaboost', '支持向量机'],
    lifePredAlgos: ['LightGBM', '随机森林回归', '神经网络回归', '线型回归']
  },
  onShareAppMessage: function() {},
  //获取当前滑块的index
  bindchange: function(e) {
    this.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    this.setData({
      currentData: e.target.dataset.current
    })
  },
  onShareAppMessage: function() {},
  toProprecessDetailPageTap: function(event) {
    var item = event.currentTarget.dataset.item
    if (item == '数据均衡化') {
      wx.navigateTo({
        url: '/pages/modules/preprocess/SMOTE/SMOTE'
      })
    } else if (item == '数据归一化') {
      wx.navigateTo({
        url: '/pages/modules/preprocess/Normalization/Normalization'
      })
    } else {
      wx.navigateTo({
        url: '/pages/modules/preprocess/IsolationForest/IsolationForest'
      })
    }
  },
  toFeaturesDetailPageTap: function(event) {
    var item = event.currentTarget.dataset.item
    if (item == '时域') {
      wx.navigateTo({
        url: "/pages/modules/featuresProcess/timeDomain/timeDomain"
      })
    } else if (item == '频域') {
      wx.navigateTo({
        url: "/pages/modules/featuresProcess/freqDomain/freqDomain",
      })
    } else if (item == '时频域') {
      wx.navigateTo({
        url: "/pages/modules/featuresProcess/timeAndFreq/timeAndFreq",
      })
    } else {
      wx.navigateTo({
        url: "/pages/modules/featuresProcess/dimension/dimension"
      })
    }
  },
  toAlgosDetailPageTap: function(event) {
    var item = event.currentTarget.dataset.item
    switch (item) {
      case '梯度下降树':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/GBDT/GBDT"
          })
          break;
        }
      case '随机森林分类':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/RFClassifier/RFClassifier"
          })
          break;
        }
      case 'Adaboost':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/Adaboost/Adaboost"
          })
          break;
        }
      case '支持向量机':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/SVM/SVM"
          })
          break;
        }
      case 'LightGBM':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/LightGBM/LightGBM"
          })
          break;
        }
      case '随机森林回归':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/RFRegression/RFRegression"
          })
          break;
        }
      case '神经网络回归':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/MLPRegression/MLPRegression"
          })
          break;
        }
      case '线型回归':
        {
          wx.navigateTo({
            url: "/pages/modules/algorithms/LinearRegression/LinearRegression"
          })
          break;
        }
    }
  }
})