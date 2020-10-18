Page({
  handleShowTost(){
    wx.showToast({
      title: '你好啊',
      mask:true,
      duration:2000,
      icon:'loading',
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log('完成函数的调用')
      }
    })
  },
  handleshowModal(){
    wx.showModal({
      title:'我是标题',
      cancelColor: '我是内容',
      //showCancel:false,
      //cancelText:'退出',
        cancelColor:'red',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点了取消按钮')
        }
        if(res.confirm){
          console.log('用户点了确定按钮')
        }
      }
    })
  },
  handleshowLoading(){
    wx.showLoading({
      title: 'title',
      mask:true,
    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
  handleshowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res)
        
      }
    })
  },
    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'你好啊',
      path:'/pages/home/home',
      imageUrl:'',

    }
  }
})
