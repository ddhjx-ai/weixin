// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      name:'zhangsan'
    },
    weibo:[
      
    ]
  },
  send(){
    wx.navigateTo({
      url: '/pages/weibo/weibo',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 修改/设置数据,使用 setData() 
    this.setData({
      'person.name':'lisi',
      age:22
    })

    // 获取数据
    console.log(this.data.person)
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