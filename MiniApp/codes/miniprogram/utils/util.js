function httpReq(url, data, callback) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: url,
    method: 'POST',
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    complete: function(res) {
      wx.hideLoading()
      callback(res.data)
    }
  })
}

function modelReq(url, data) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: url,
    method: 'POST',
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    complete(res) {
      wx.hideLoading()
      if (res.data.status == 0) {
        wx.showToast({
          title: res.data.msg,
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    }
  })
}


function prevPage() {
  wx.navigateBack({
    delta: 1
  })
}

function nextPage(url) {
  wx.navigateTo({
    url: url,
  })
}

function xlsReq(url, data) {
  wx.showLoading({
    title: '加载中'
  })
  wx.downloadFile({
    url: url,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: data,
    complete: function(res) {
      wx.hideLoading()
      var filepath = res.tempFilePath
      wx.openDocument({
        filePath: filepath,
        fileType: 'xls'
      })
    }
  })
}

module.exports = {
  httpReq: httpReq,
  xlsReq: xlsReq,
  prevPage: prevPage,
  nextPage: nextPage,
  modelReq: modelReq
}