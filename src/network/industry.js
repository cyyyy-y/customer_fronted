import {request} from "./request";

export function getDefaultTotal(pageNum, pageSize, type) {
  return request({
    method: 'get',
    url: '/count/industry',
  })
}