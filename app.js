const TOKEN='token'
App({
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //先从缓存中取出token
    const token=wx.getStorageSync(TOKEN)
    //判断token是否有值
    if(token&&token.length!==0){
      //有token验证token是否过期
      this.check_token(token)
    }else{//没有token进行登录
      this.login()
    }
    
  },
  check_token(token){
    console.log('执行了验证token操作')
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        method:'post',
        header:{
          token
        },
        success:(res)=>{
          //console.log(res)
          if(!res.data.errCode==undefined){
            console.log('token有效')
            this.globalData.token=token;
          }else{
            this.login()
          }
        },
        fail:function(err){
          console.log(err)
        }
      })
    },
  login(){
    console.log('执行了登录操作')
    wx.login({
      //只有5分钟
      success:(res)=>{
        console.log(res)
        const code=res.code;
        wx.request({
          url:  "http://123.207.32.32:3000/login",
          method:'post',
          data:{
            code
          },
          success:(res)=>{
            console.log(res)
            const token=res.data.token
            this.globalData.token=token
            //console.log(this.globalData.token)
            //保存到本地
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
