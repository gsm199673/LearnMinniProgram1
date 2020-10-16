Page({
  handleItemClick(event){
    console.log(event)
  },
  handleSelect(){
    const select=this.selectComponent(".select-class")
    // console.log(select)
    // select.setData({
    //   counter:select.data.counter+20
    // })
    select.incrementCounter(10)
  },
  data:{
    isShow:true
  },
  handleChange(){
    this.setData({
      isShow:!this.data.isShow//要取反
    })
  }
})