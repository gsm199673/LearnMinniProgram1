// pages/wx/wx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    score:45,
    movies:["星际","火影","超人"],
    nums:[
      [10,32,56,588],
      [30,6,146,46,57],
      [65,54,58,53],
    ],
    letters:['a','b','c']
  },
  handleIncrement(){
    this.setData({
      score:this.data.score+6
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
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