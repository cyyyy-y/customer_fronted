import {request} from "./request";

export function getReason(pageNum, pageSize, type) {
  return request({
    method: 'get',
    url: '/reason/check',
    params: {
      pageNum,
      pageSize,
      type
    }
  })
}
export function updateReason(id, isUsed) {
  return request({
    method: 'post',
    url: '/reason/update',
    params: {
      id,
      isUsed
    }
  })
}
export function deleteReason(id) {
  return request({
    method: 'post',
    url: '/reason/delete/' + id
  })
}
export function addReason(reason) {
  return request({
    method: 'post',
    url: '/reason/add/' + id,
    date: {
      ...reason
    }
  })
}