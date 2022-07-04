import {request} from "./request";

export function getDefaultList(pageNum, pageSize) {
  return request({
    method: 'get',
    url: '/default/search/list',
    params: {
      pageNum,
      pageSize
    }
  })
}

export function getDefaultAuditList(pageNum, pageSize) {
  return request({
    method: 'get',
    url: '/default/certification/verify/list',
    params: {
      pageNum,
      pageSize
    }
  })
}

export function getRebornList(pageNum, pageSize) {
  return request({
    method: 'get',
    url: '/default/reborn/list/0',
    params: {
      pageNum,
      pageSize
    }
  })
}

export function defaultAudit(id, state) {
  return request({
    method: 'post',
    url: '/default/certification/verify/' + id,
    params: {
      state
    }
  })
}

export function rebornAudit(id, rebornState) {
  return request({
    method: 'post',
    url: '/default/reborn/verify/' + id,
    params: {
      rebornState
    }
  })
}

export function applyDefault(company, reasonId, defaultLevel, remarks) {
  return request({
    method: 'post',
    url: '/default/certification/apply',
    params: {
      company, reasonId, defaultLevel, remarks
    }
  })
}