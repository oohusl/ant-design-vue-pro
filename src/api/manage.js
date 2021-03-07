import request from '@/utils/request'

const api = {
  user: '/users',
  createUser: '/usersRegister',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  house: '/community-infos/query',
  editHouse: '/community-infos',
  constants: '/set/constant-infos',
  queryAnalysis: '/house-analysis/queryByCommunityId',
  saveAnalysis: '/house-analysis'
}

export default api

export function getUserList (parameter) {
  return request({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function saveUser (parameter) {
  return request({
    url: api.createUser,
    method: parameter.id ? 'put' : 'post',
    data: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return request({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}

export function getHouse (parameter) {
  return request({
    url: `${api.house}?page=${parameter.page}&sort=${parameter.sort}&size=${parameter.size}`,
    method: 'post',
    data: parameter
  })
}

export function saveHouse (parameter) {
  return request({
    url: api.editHouse,
    method: parameter.id ? 'put' : 'post',
    data: parameter
  })
}

export function getLabels () {
  return request({
    url: `${api.constants}`,
    method: 'post',
    data: { 'constantType': 'bq' }
  })
}

export function photoQuery (id, type) {
  return request({
    url: '/community-infos/findCommunityPhoto',
    method: 'post',
    data: { communityId: id, type: type }
  })
}

export function photoUpload (formData) {
  return request({
    url: '/community-infos/fileUpload',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function photoDelete (id) {
  return request({
    url: `/community-infos/fileDeletion/${id}`,
    method: 'get'
  })
}
export function queryAnalysis (id, severalBedrooms) {
  return request({
    url: api.queryAnalysis,
    method: 'post',
    params: { communityId: id, severalBedrooms: severalBedrooms }
  })
}

export function saveAnalysis (houseType) {
  return request({
    url: api.saveAnalysis,
    method: 'post',
    data: houseType
  })
}
