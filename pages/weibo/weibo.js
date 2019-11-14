// pages/weibo/weibo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  subEvent(e){
    // console.log(e)
    // 获取表单数据
    let content = e.detail.value.text;
    // 把数据存到上一个页面中的data中，通过 getCurrentPages() 获取页面栈(数组)
    // console.log(getCurrentPages())
    // 获取上一页面的data的存储weibo的数据
    let weiboInfo = getCurrentPages()[0].data.weibo
    weiboInfo.push(content)
    // 设置到上一页面的data中
    getCurrentPages()[0].setData({
      weibo:weiboInfo
    })
    // 跳转回上一页面
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})