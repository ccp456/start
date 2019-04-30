const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  jumppage:function(){
    app.globalData.userInfo = 1
    wx.switchTab({
      url: '/pages/device/device',
    })
  },
  jumpnew:function(){
    app.globalData.userInfo = 1
    wx.switchTab({
      url: '/pages/monitoring/monitoring',
    })
  },
  authorLogin: function () {
    app.globalData.userInfo = 1
    wx.switchTab({
      url: '/pages/list/list',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#6e42d3',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})