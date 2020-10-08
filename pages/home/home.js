const app=getApp()
const name=app.globalData.name;
const age=app.globalData.age;

Page({
  //获取用户的信息
  handleGetUserInfo(event){
    console.log(event.detail);
  }
})
