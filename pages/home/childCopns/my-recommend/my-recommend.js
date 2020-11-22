// pages/home/childCopns/my-recommend/my-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoading(){
      if(!this.data.isLoad){
        this.data.isLoad=true
        this.triggerEvent('imageload')
        //console.log('加载完成')
      }
    }
  }
})
