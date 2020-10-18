import request from '../../service/network.js'

Page({
  onLoad: function (options) {
    this.get_data_origin()
    request({
      url:'http://123.207.32.32:8000/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_data_origin(){
 // wx.request({
      //   url: 'http://123.207.32.32:8000/recommend',
      //   success:function(res){
      //     console.log(res)
      //   }
      // })
      wx.request({ 
        url: 'http://httpbin.org/post',
        method:'post',
        data:{
          name:'coderwhy',
          age:18
        },
        success:function(res){
          console.log(res)
        },
        fail:function(err){
          console.log(err)
        },
        complete:function(com){
          console.log(com)
        }
      })
  }
})