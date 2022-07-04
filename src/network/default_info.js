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

//违约申请
export function applyDefault(ruleForm) {
  return request({
    method: 'post',
    url: '/default/certification/apply',
    params: {
      company: ruleForm.company,
      reasonId: ruleForm.reasonId,
      defaultLevel: ruleForm.defaultLevel,
      remarks: ruleForm.remarks,
    }
    // date: {
    //   ...ruleForm
    // }
  })
}

//重生申请
export function applyRebirth(reasonId) {
  return request({
    method: 'post',
    url: '/default/reborn/apply/5',
    date: {
      reasonId: reasonId
    }
  })
}

//违约申请查询
export function getOwnDefault(pageNum, pageSize) {
  return request({
    method: 'get',
    url: '/default/certification/list',
    params: {
      pageNum,
      pageSize
    }
  })
}

