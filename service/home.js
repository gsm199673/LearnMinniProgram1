import request from './network'

export function getMultiData(){
  return request({
    url:'/home/swiperdata'
  })
}
export function getGoodData(type,page){
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}
export function getCateList(){
  return request({
    url:'/home/catitems'
  })
}
export function getfloorData(){
  return request({
    url:'/home/floordata'
  })
}