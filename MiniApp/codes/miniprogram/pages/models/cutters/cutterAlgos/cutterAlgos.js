var app = getApp()
var util = require('../../../../utils/util.js')
Page({
  data: {
    title: '4.算法选择及调参',
    page: '4/6',
    illustration: '',
    count: 0,
    obj: [],
    name: [],
    Name: '算法 : ',
    param1Name: '树的棵数',
    param2Name: "学习率",
    param3Name: "最大深度",
    param4Name: "最少分裂几个子节点",
    param5Name: "NULL",
    param1Value: 100,
    param2Value: 0.1,
    param3Value: 1,
    param4Value: 'None',
    param5Value: 'NULL',
    array2: ['LightGBM', 'DecisionTreeRegressor', 'LinearRegression', 'RandomForestRegression', 'SVR', 'MLPRegression', 'Ridge'],
    index: 0,
    objectArray: [{
        id: 0,
        name: 'LightGBM'
      },
      {
        id: 1,
        name: 'DecisionTreeRegressor'
      },
      {
        id: 2,
        name: 'LinearRegression'
      },
      {
        id: 3,
        name: 'RandomForestRegression'
      },
      {
        id: 4,
        name: 'SVR'
      },
      {
        id: 5,
        name: 'MLPRegression'
      },
      {
        id: 6,
        name: 'Ridge'
      }
    ],
  },
  nextPage: function() {
    var nextUrl = '/pages/models/cutters/cutterDivider/cutterDivider'
    if (app.globalData.cutterId == 4) {
      if (this.data.count < 2) {
        wx.showModal({
          title: '请添加算法',
          content: '请至少添加两个算法进行训练',
          showCancel: false
        })
      } else {
        util.nextPage(nextUrl)
      }
    }else{
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
          param1Name: "树的棵数"
        });
        this.setData({
          param2Name: "学习率"
        });
        this.setData({
          param3Name: "最大深度"
        });
        this.setData({
          param4Name: "最少分裂几个子节点"
        });
        this.setData({
          param5Name: "NULL"
        });
        this.setData({
          param1Value: "100"
        });
        this.setData({
          param2Value: "0.1"
        });
        this.setData({
          param3Value: "1"
        });
        this.setData({
          param4Value: "None"
        });
        this.setData({
          param5Value: "NULL"
        });

        break;
      case '1':
        this.setData({
          param1Name: "最大特征数"
        });
        this.setData({
          param2Name: "分裂所需最小节点数"
        });
        this.setData({
          param3Name: "特征选择标准"
        });
        this.setData({
          param4Name: "最大叶节点数"
        });
        this.setData({
          param5Name: "树的最大深度"
        });
        this.setData({
          param1Value: "None"
        });
        this.setData({
          param2Value: "2"
        });
        this.setData({
          param3Value: "mse"
        });
        this.setData({
          param4Value: "None"
        });
        this.setData({
          param5Value: "None"
        });
        break;
      case '2':
        this.setData({
          param1Name: "copy_X"
        });
        this.setData({
          param2Name: "是否将数据归一化"
        });
        this.setData({
          param3Name: "是否有截距"
        });
        this.setData({
          param4Name: "核数"
        });
        this.setData({
          param5Name: "NULL"
        });
        this.setData({
          param1Value: "True"
        });
        this.setData({
          param2Value: "False"
        });
        this.setData({
          param3Value: "True"
        });
        this.setData({
          param4Value: "1"
        });
        this.setData({
          param5Value: "NULL"
        });
        break;
      case '3':
        this.setData({
          param1Name: "并行使用的进程数"
        });
        this.setData({
          param2Name: "最大深度"
        });
        this.setData({
          param3Name: "树的棵数"
        });
        this.setData({
          param4Name: "子节点最少叶子数"
        });
        this.setData({
          param5Name: "最少分裂几个子节点"
        });
        this.setData({
          param1Value: "1"
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
          param1Name: "决定支撑向量的多少"
        });
        this.setData({
          param2Name: "核函数"
        });
        this.setData({
          param3Name: "决定了多项式的最高次幂"
        });
        this.setData({
          param4Name: "svm结束标准的精度"
        });
        this.setData({
          param5Name: "惩罚系数"
        });
        this.setData({
          param1Value: "auto"
        });
        this.setData({
          param2Value: "rbf"
        });
        this.setData({
          param3Value: "3"
        });
        this.setData({
          param4Value: "0.0001"
        });
        this.setData({
          param5Value: "1.0"
        });
        break;
      case '5':
        this.setData({
          param1Name: "选择的解决器"
        });
        this.setData({
          param2Name: "最大迭代数"
        });
        this.setData({
          param3Name: "正则化系数"
        });
        this.setData({
          param4Name: "精度"
        });
        this.setData({
          param5Name: "随机数生成器的状态"
        });
        this.setData({
          param1Value: "adam"
        });
        this.setData({
          param2Value: "200"
        });
        this.setData({
          param3Value: "0.0001"
        });
        this.setData({
          param4Value: "0.0001"
        });
        this.setData({
          param5Value: "None"
        });
        break;
      case '6':
        this.setData({
          param1Name: "用到的解决器"
        });
        this.setData({
          param2Name: "是否需要截距"
        });
        this.setData({
          param3Name: "正则化系数"
        });
        this.setData({
          param4Name: "精度"
        });
        this.setData({
          param5Name: "标准化X的开关"
        });
        this.setData({
          param1Value: "auto"
        });
        this.setData({
          param2Value: "True"
        });
        this.setData({
          param3Value: "0.5"
        });
        this.setData({
          param4Value: "0.0001"
        });
        this.setData({
          param5Value: "False"
        });
        break;
    }
  },
  formsubmit(e) {
    this.data.count++
      switch (this.data.index) {
        default: {
          this.addAlgo(0)
          var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/48'
          util.modelReq(url, {
            'n_estimators': e.detail.value.param1Value,
            'learning_rate': e.detail.value.param2Value,
            'max_depth': e.detail.value.param3Value,
            'random_state': e.detail.value.param4Value,
          })
          break;
        }
        case '1':
          {
            this.addAlgo(1)
            var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/42'
            util.modelReq(url, {
              'max_features': e.detail.value.param1Value,
              'min_samples_split': e.detail.value.param2Value,
              'criterion': e.detail.value.param3Value,
              'max_leaf_nodes': e.detail.value.param4Value,
              'max_depth': e.detail.value.param5Value
            })
            break;
          }
        case '2':
          {
            this.addAlgo(2)
            var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/43'
            util.modelReq(url, {
              'copy_X': e.detail.value.param1Value,
              'normalize': e.detail.value.param2Value,
              'fit_intercept': e.detail.value.param3Value,
              'n_jobs': e.detail.value.param4Value
            })
            break;
          }
        case '3':
          {
            this.addAlgo(3)
            var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/44'
            util.modelReq(url, {
              'n_jobs': e.detail.value.param1Value,
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
            var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/45'
            util.modelReq(url, {
              'gamma': e.detail.value.param1Value,
              'kernel': e.detail.value.param2Value,
              'degree': e.detail.value.param3Value,
              'tol': e.detail.value.param4Value,
              'C': e.detail.value.param5Value
            })
            break;
          }
        case '5':
          {
            this.addAlgo(5)
            var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/46'
            util.modelReq(url, {
              'solver': e.detail.value.param1Value,
              'max_iter': e.detail.value.param2Value,
              'alpha': e.detail.value.param3Value,
              'tol': e.detail.value.param4Value,
              'random_state': e.detail.value.param5Value
            })
            break;
          }
        case '6':
          {
            this.addAlgo(6)
            var url = app.globalData.basePath + 'learn/484/' + app.globalData.instance + '/classifier/47'
            util.modelReq(url, {
              'solver': e.detail.value.param1Value,
              'fit_intercept': e.detail.value.param2Value,
              'alpha': e.detail.value.param3Value,
              'tol': e.detail.value.param4Value,
              'normalize': e.detail.value.param5Value,
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
        ["name[" + (this.data.obj.length - 1) + "]"]: this.data.array2[this.data.index]
      })
  }
})