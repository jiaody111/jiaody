var app = getApp()
Page({
  data: {
    avatarUrl: '/images/icons/person.png',
    nickName: '',
    expData: '',
    arrayLength: '',
    expId: '',
    expdata: '',
    showModal: false,
    showLink: false,
    visible: false,
    actions: [{
      name: '删除',
      color: '#ed3f14'
    }],
    show: false
  },
  onLoad() {
    this.reqFunc()
  },
  onShow() {
    this.reqFunc()
  },
  reqFunc() {
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName
    })
    var that = this
    wx.request({
      url: 'https://phmlearn.com/wx/user/labRecord',
      data: {
        'openId': app.globalData.userId
      },
      complete(res) {
        console.log(res.data.data)
        that.setData({
          expData: res.data.data,
          arrayLength: res.data.data.length
        })
        if (that.data.arrayLength == 0) {
          that.setData({
            show: true
          })
        } else {
          that.setData({
            show: false
          })
        }
      }
    })
  },
  handleCancel() {
    this.setData({
      visible: false
    });
  },
  handleClickItem() {
    const action = [...this.data.actions];
    this.setData({
      actions: action,
      visible: false
    })
    var that = this
    console.log(that.data.expId)
    wx.request({
      url: 'https://phmlearn.com/wx/user/removeRecord',
      data: {
        'openId': app.globalData.userId,
        'instanceId': that.data.expId
      },
      complete(res) {
        if (res.data.status == 0)
          wx.showToast({
            title: res.data.msg,
          })
        else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
        that.onLoad()
      }
    })
  },
  expDelTap(e) {
    this.setData({
      visible: true,
      expId: e.currentTarget.dataset.expid
    })
    console.log('要删除的实验id：' + this.data.expId)
  },
  expLookTap(e) {
    for (var j = 0; j < this.data.expData.length; j++) {
      if (this.data.expData[j].instanceId == e.currentTarget.dataset.expid) {
        this.setData({
          expdata: this.data.expData[j]
        })
        app.globalData.expdata = this.data.expdata
      }
    }
    wx.navigateTo({
      url: '/pages/expDetail/expDetail?expid=' + e.currentTarget.dataset.expid,
    })
  },

  // 顶部modal
  onShareAppMessage: function () { },
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  showLinkTap() {
    this.setData({
      showLink: true
    })
  },
  preventTouchMove: function () { },
  hideModal: function () {
    this.setData({
      showModal: false,
      showLink: false
    });
  },
  onCancel: function () {
    this.hideModal();
  },
  onConfirm: function () {
    this.hideModal();
  }
})