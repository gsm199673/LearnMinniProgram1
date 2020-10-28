import {
  getMultiData,
  getGoodsData
}from '../../service/home.js'
const top_distance=1000;
const types=['pop','new','sell'];
Page({
  data:{
    banners:[],
    recommends:[],
    titles:["流行","新款","精选"],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    showBackTop:false,
    isTabFixd:false,
    tabScorllTop:0
    
  },
  onLoad:function(options){
    this._getMultiData()
    this._getGoodsData('pop') 
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  // 请求轮播图的数据
  _getMultiData(){
    getMultiData().then(res=>{
      //console.log(res)
      const banners=res.data.data.banner.list;
      const recommends=res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type){
    const page=this.data.goods[type].page+1;
    getGoodsData(type,page).then(res=>{
      console.log(res)
      //获取数据
      const list=res.data.data.list;
      // for(let item of list){
      //   this.data.goods[type].list.push(list)
      // }
      //this.data.goods[type].list.push(...list)
      const oldList=this.data.goods[type].list;
      oldList.push(...list)
      const typeKey=`goods.${type}.list`;
      const pageKey=`goods.${type}.page`;
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page
      })
    })
  },
  handleClick(event){
    console.log(event)
    const index=event.detail.index;
    //设置currenttype
    // switch(index){
    //   case 0: this.setData({
    //     currentType:'pop'
    //   })
    //   break;
    //   case 1: this.setData({
    //     currentType:'new'
    //   })
    //   break;
    //   case 2: this.setData({
    //     currentType:'sell'
    //   })
    //   break;
    // }
    const type=types[index];
    this.setData({
      currentType:type
    })
  },
  onReachBottom(){
    //console.log('页面滚动到底部')
    this._getGoodsData(this.data.currentType)
  },
  handleImageLoad(){
    //console.log('加载完成')
    wx.createSelectorQuery().select('#tab-Control').boundingClientRect(rect=>{
      //console.log(rect)
      this.data.tabScorllTop=rect.top
    }).exec() 
  },
  onPageScroll(options){
    //console.log(options)
    const scrollTop=options.scrollTop;
    //设置backtop的位置
    const flag=top_distance;
    if(flag!=this.data.showBackTop){
      this.setData({
        showBackTop:scrollTop>=top_distance
      })
    }
    // 修改isTabFixd属性
    const flag2=scrollTop>=this.data.tabScorllTop;
    if(flag2!=this.data.tabScorllTop){
      this.setData({
        isTabFixd:flag2
      })
    }
  },
  onShow(){
    
  }
})