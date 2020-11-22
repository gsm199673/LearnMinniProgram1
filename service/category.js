import request from './network'
export function getCateLeft(){
  return request({
    url:'/categories'
  })
}
