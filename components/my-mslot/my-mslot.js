// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options:{
    multipleSlots:true
  },
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来的时候')
    },
    hide(){
      console.log('监听组件所在页面隐藏起来的时候')
    },
    resize(){
      console.log('监听页面尺寸发生改变的时')
    }
  },
  lifetimes:{
    created(){
      console.log('组件被创建了')
    },
    attached(){
      console.log('组件被添加到页面了')
    },
    ready(){
      console.log('组件被渲染出来了')
    },
    moved(){
      console.log('组件被移动了')
    },
    detached(){
      console.log('组件被删除了')
    }
  }
})
