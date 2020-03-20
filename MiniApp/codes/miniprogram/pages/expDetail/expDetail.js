// pages/expDetail/expDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:'',
  },
  onShow: function() {
    this.setData({
      data: getApp().globalData.expdata
    })
  },
  onShareAppMessage: function() {

  }
})