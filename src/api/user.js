// 用户相关请求模块
import request from '@/utils/request.js'

export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    // 完整写法是data: data。ES6中属性名和属性值相同时可以简写
    data
  })
}
