import request from '@/utils/axios.js'

export function login (body) {
  return request({
    url: '/sys/auth/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body
  })
}

export function getNewToken (body) {
  return request({
    url: '/api/system/auth/token/refresh',
    method: 'post',
    data: body
  })
}

export function getCaptcha () {
  return request({
    url: '/api/system/auth/captcha/get',
    method: 'post',
  })
}