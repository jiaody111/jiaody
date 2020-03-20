let app = getApp();
Page({

  data: {
    currentData: 0,
    swiperImgs:['/images/fan-swiper.jpg','/images/cutter-swiper.jpg']
  },
  onSwiperTap(e)
  {
    if(e.target.dataset.imgid == 1)
    {
      app.globalData.fanId = e.target.dataset.imgid;
      wx.navigateTo({
        url: '/pages/models/fans/fanStart/fanStart',
      })
    }
    else{
      app.globalData.cutterId = e.target.dataset.imgid;
      wx.navigateTo({
        url: '/pages/models/cutters/cutterStart/cutterStart',
      }) 
    }
  },
  onShareAppMessage: function () { },
  //获取当前滑块的index
  bindchange: function (e) {
    this.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
      this.setData({
        currentData: e.target.dataset.current
      })
  },
  navTo_fanStart: function(e) {
    app.globalData.fanId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/models/fans/fanStart/fanStart',
    })
  },
  navTo_cuttersStart: function(e) {
    app.globalData.cutterId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/models/cutters/cutterStart/cutterStart',
    })
  }
})
