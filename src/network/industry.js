import {request} from "./request";

export function getDefaultTotal() {
  return request({
    method: 'get',
    url: '/count/industry/defaultTotal',
  })
}
export function getIndustryDefaultTotal(industry) {
  return request({
    method: 'get',
    url: '/count/industry/defaultCount',
    params: {
      industry
    }
  })
}

export function getAreaTotal() {
  return request({
    method: 'get',
    url: '/count/area/defaultTotal',
  })
}
export function getIndustryAreaTotal(industry) {
  return request({
    method: 'get',
    url: '/count/area/defaultCount',
    params: {
      industry
    }
  })
}