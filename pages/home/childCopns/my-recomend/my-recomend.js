// pages/home/childCopns/my-recomend/my-recomend.js
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
    handleLoadImage(){
      //console.log('222')
      if(!this.data.isLoad){
        this.data.isLoad=true
        this.triggerEvent('imageLoad')
      }
    }
  }
})
