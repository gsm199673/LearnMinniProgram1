Page({
  data:{
    title:'哈哈哈'
  },
  handlePushDetil(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })
  }
})