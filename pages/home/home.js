// const app=getApp()
// const name=app.globalData.name;
// const age=app.globalData.age;

Page({
  //1获取用户的信息
  handleGetUserInfo(event){
    console.log(event);
  },
  //2
  data:{
    list:[]
  }, 
  //3监听页面的生命周期函数
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'url',
      success:(res)=>{
        console.log(res)
        const data=res.rawData
        this.setData({
          list:data
        })
      }
    })
  },
  //页面初次渲染完成的时候
  onReady(){
    console.log('onReady')
  },
  //页面显示出来
  onShow(){
    console.log('onShow')
  },
  onHide(){
    console.log('onHide')
  },
  onUnload(){
    console.log('onUnload')
  },
  //4监听其他事件
  //页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面的底部
  onReachBottom(){
    console.log("到底部了")
  },
  onPullDownRefresh(){
    console.log("下拉刷新的事件")
  }
})
