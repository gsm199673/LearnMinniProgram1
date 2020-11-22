// pages/category/category.js
import {
  getCateLeft
} from '../../service/category'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateleftlist: [],
    currentIndex: 0,
    rightcontent: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCateLeft()
  },
  _getCateLeft(i) {
    getCateLeft().then(res => {
      console.log(res)
      const cateleft = res.data.message;
      this.setData({
        cateleftlist: cateleft,
      }, () => {
        this.setData({
          rightcontent: this.data.cateleftlist[this.data.currentIndex].children,
        })
      }
      )
    })
  },
  handleClick(event) {
    console.log(event)
    const index = event.currentTarget.dataset.index;
    this.setData({
      currentIndex: index,
    },()=>{
      this.setData({
        rightcontent:this.data.cateleftlist[this.data.currentIndex].children
      })
    }
    )
  }
})