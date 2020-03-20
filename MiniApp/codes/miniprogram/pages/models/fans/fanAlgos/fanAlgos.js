var app = getApp()
var util = require('../../../../utils/util.js')
Page({
  data: {
    title: '4.算法选择及调参',
    page: '4/6',
    illustration: '',
    count: 0,
    algoDesp: ['建议使用GBDT集成算法训练模型。\n 您也可以使用其他算法进行训练。', '建议使用GBDT和RandomForest两种算法进行训练，对训练结果进行对比分析。'],
    obj: [],
    name: [],
    param1Name: '模型训练的迭代次数',
    param2Name: "学习率",
    param3Name: "决策树的最大深度",
    param4Name: "内部节点再划分最小样本数",
    param5Name: "叶子节点最少样本数",
    param1Value: 100,
    param2Value: 1,
    param3Value: 3,
    param4Value: 2,
    param5Value: 1,
    array: ['GBDT', 'AdaBoost', 'SVM', 'RandomForest', 'LR', 'DecisionTree'],
    index: 0,
    objectArray: [{
        id: 0,
        name: 'GBDT'
      },
      {
        id: 1,
        name: 'AdaBoost'
      },
      {
        id: 2,
        name: 'SVM'
      },
      {
        id: 3,
        name: 'RandomForest'
      },
      {
        id: 4,
        name: 'LR'
      },
      {
        id: 5,
        name: 'DecisionTree'
      }
    ],
  },
  nextPage: function() {
    var nextUrl = '/pages/models/fans/fanDivider/fanDivider'
    if (app.globalData.fanId == 2) {
      if (this.data.count < 2) {
        wx.showModal({
          title: '请添加算法',
          content: '请至少添加两个算法进行训练',
          showCancel: false
        })
      } else {
        util.nextPage(nextUrl)
      }
    } else if (app.globalData.fanId == 1) {
      util.nextPage(nextUrl)
    }
  },
  prevPage: function() {
    util.prevPage()
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    switch (this.data.index) {
      case '0':
        this.setData({
          param1Name: "模型训练的迭代次数"
        });
        this.setData({
          param2Name: "学习率"
        });
        this.setData({
          param3Name: "决策树的最大深度"
        });
        this.setData({
          param4Name: "内部节点再划分最小样本数"
        });
        this.setData({
          param5Name: "叶子节点最少样本数"
        });
        this.setData({
          param1Value: "100"
        });
        this.setData({
          param2Value: "1"
        });
        this.setData({
          param3Value: "3"
        });
        this.setData({
          param4Value: "2"
        });
        this.setData({
          param5Value: "1"
        });
        break;
      case '1':
        this.setData({
          param1Name: "弱分类器或弱回归学习器"
        });
        this.setData({
          param2Name: "算法"
        });
        this.setData({
          param3Name: "学习率"
        });
        this.setData({
          param4Name: "随机数种子"
        });
        this.setData({
          param5Name: "模型训练的迭代次数"
        });
        this.setData({
          param1Value: "DecisionTreeClassifier"
        });
        this.setData({
          param2Value: "SAMME"
        });
        this.setData({
          param3Value: "1.0"
        });
        this.setData({
          param4Value: "None"
        });
        this.setData({
          param5Value: "50"
        });
        break;
      case '2':
        this.setData({
          param1Name: "决定了多项式的最高次幂"
        });
        this.setData({
          param2Name: "核函数"
        });
        this.setData({
          param3Name: "决定支撑向量的多少"
        });
        this.setData({
          param4Name: "惩罚系数"
        });
        this.setData({
          param5Name: "svm结束标准的精度"
        });
        this.setData({
          param1Value: "3"
        });
        this.setData({
          param2Value: "rbf"
        });
        this.setData({
          param3Value: "auto"
        });
        this.setData({
          param4Value: "1.0"
        });
        this.setData({
          param5Value: "0.0001"
        });

        break;
      case '3':
        this.setData({
          param1Name: "分割时需要考虑的特征数目"
        });
        this.setData({
          param2Name: "（决策）树的最大深度"
        });
        this.setData({
          param3Name: "森林里（决策）树的数目"
        });
        this.setData({
          param4Name: "叶子结点上的最小样本数量"
        });
        this.setData({
          param5Name: "分割内部节点最小样本数量"
        });
        this.setData({
          param1Value: "auto"
        });
        this.setData({
          param2Value: "None"
        });
        this.setData({
          param3Value: "10"
        });
        this.setData({
          param4Value: "1"
        });
        this.setData({
          param5Value: "2"
        });

        break;
      case '4':
        this.setData({
          param1Name: "损失函数的优化方法"
        });
        this.setData({
          param2Name: "残差收敛条件"
        });
        this.setData({
          param3Name: "惩罚系数"
        });
        this.setData({
          param4Name: "分类方法"
        });
        this.setData({
          param5Name: "将截距/方差加到决策模型"
        });
        this.setData({
          param1Value: "sag"
        });
        this.setData({
          param2Value: "0.0001"
        });
        this.setData({
          param3Value: "l2"
        });
        this.setData({
          param4Value: "ovr"
        });
        this.setData({
          param5Value: "True"
        });
        break;
      case '5':
        this.setData({
          param1Name: "最大特征数"
        });
        this.setData({
          param2Name: "特征划分标准"
        });
        this.setData({
          param3Name: "特征选择标准"
        });
        this.setData({
          param4Name: "内部再划分最小样本数"
        });
        this.setData({
          param5Name: "决策树最大深度"
        });
        this.setData({
          param1Value: "None"
        });
        this.setData({
          param2Value: "best"
        });
        this.setData({
          param3Value: "gini"
        });
        this.setData({
          param4Value: "2"
        });
        this.setData({
          param5Value: "None"
        });
        break;
    }
  },
  formsubmit(e) {
    this.data.count ++ 
    switch (this.data.index) {
      default: {
        this.addAlgo(0)
        var url = ''
        if (app.globalData.fanId == 1) {
          url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/classifier/7'
        } else if (app.globalData.fanId == 2) {
          url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/classifier/7'
        }
        util.modelReq(url, {
          'n_estimators': e.detail.value.param1Value,
          'learning_rate': e.detail.value.param2Value,
          'max_depth': e.detail.value.param3Value,
          'min_samples_split': e.detail.value.param4Value,
          'min_samples_leaf': e.detail.value.param5Value
        })
        break;
      }
      case '1':
        {
          this.addAlgo(1)
          var url = ''
          if (app.globalData.fanId == 1) {
            url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/classifier/4'
          } else if (app.globalData.fanId == 2) {
            url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/classifier/4'
          }
          util.modelReq(url, {
            'base_estimator': e.detail.value.param1Value,
            'algorithm': e.detail.value.param2Value,
            'learning_rate': e.detail.value.param3Value,
            'random_state': e.detail.value.param4Value,
            'n_estimators': e.detail.value.param5Value
          })
          break;
        }
      case '2':
        {
          this.addAlgo(2)
          var url = ''
          if (app.globalData.fanId == 1) {
            url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/classifier/13'
          } else if (app.globalData.fanId == 2) {
            url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/classifier/13'
          }
          util.modelReq(url, {
            'degree': e.detail.value.param1Value,
            'kernel': e.detail.value.param2Value,
            'gamma': e.detail.value.param3Value,
            'C': e.detail.value.param4Value,
            'tol': e.detail.value.param5Value
          })
          break;
        }
      case '3':
        {
          this.addAlgo(3)
          var url = ''
          if (app.globalData.fanId == 1) {
            url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/classifier/38'
          } else if (app.globalData.fanId == 2) {
            url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/classifier/38'
          }
          util.modelReq(url, {
            'max_features': e.detail.value.param1Value,
            'max_depth': e.detail.value.param2Value,
            'n_estimators': e.detail.value.param3Value,
            'min_samples_leaf': e.detail.value.param4Value,
            'min_samples_split': e.detail.value.param5Value
          })
          break;
        }
      case '4':
        {
          this.addAlgo(4)
          var url = ''
          if (app.globalData.fanId == 1) {
            url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/classifier/39'
          } else if (app.globalData.fanId == 2) {
            url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/classifier/39'
          }
          util.modelReq(url, {
            'solver': e.detail.value.param1Value,
            'tol': e.detail.value.param2Value,
            'penalty': e.detail.value.param3Value,
            'multi_class': e.detail.value.param4Value,
            'fit_intercept': e.detail.value.param5Value
          })
          break;
        }
      case '5':
        {
          this.addAlgo(5)
          var url = ''
          if (app.globalData.fanId == 1) {
            url = app.globalData.basePath + 'learn/390/' + app.globalData.instance + '/classifier/40'
          } else if (app.globalData.fanId == 2) {
            url = app.globalData.basePath + 'learn/392/' + app.globalData.instance + '/classifier/40'
          }
          util.modelReq(url, {
            'max_features': e.detail.value.param1Value,
            'splitter': e.detail.value.param2Value,
            'criterion': e.detail.value.param3Value,
            'min_samples_split': e.detail.value.param4Value,
            'max_depth': e.detail.value.param5Value
          })
          break;
        }
    }
  },
  addAlgo(index) {
    var temp = this.data.obj;
    temp.push(this.data.obj.length);
    this.setData({
        obj: temp
      }),
    this.setData({
      ["name[" + (this.data.obj.length - 1) + "]"]: this.data.array[index]
    })
  }
})