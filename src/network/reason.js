import {request} from "./request";

export function getReason(pageNum, pageSize) {
  return request({
    method: 'get',
    url: '/reason/check',
    params: {
      pageNum,
      pageSize
    }
  })
}