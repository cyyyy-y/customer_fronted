import {request} from "./request";

export function login(account, password) {
  return request({
    method: 'get',
    url: '/user/login?account=3&password=123',
  })
}