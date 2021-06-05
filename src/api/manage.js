import request from '@/utils/request'

const api = {
  user: '/users',
  normalUsers: '/normal-users',
  createUser: '/usersRegister',
  resetPassword: '/user/changeUserPassReset',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  house: '/community-infos/query',
  getHouse: '/community-infos/',
  editHouse: '/community-infos',
  constants: '/set/constant-infos',
  queryAnalysis: '/house-analysis/queryByCommunityId',
  getSeveralBedroomsInfo: '/house-analysis/getSeveralBedroomsInfo',
  saveAnalysis: '/house-analysis',
  newHouseDiary: '/house-diary',
  queryHouseDiary: '/house-diary/queryHouseDiary',
  queryHouseQuestion: '/house-diary/queryDiaryQuestionInfo',
  createHouseQuestion: '/house-diary/diaryQuestionInfo',
  housePhotoUpload: '/community-infos/fileUpload',
  ticket: '/ticket-infos/query',
  myticket: '/ticket-infos/getMyTicket',
  ticketHistorys: '/ticket-historys',
  ticketHistory: '/ticket-history',
  ticketOwners: '/ticket-owners',
  ticketOwner: '/ticket-owner'
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

export function updateUser (parameter) {
  return request({
    url: api.user,
    method: 'put',
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

export function getHouseDetail (parameter) {
  return request({
    url: `${api.getHouse}${parameter}`,
    method: 'get'
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
    data: { constantType: 'bq' }
  })
}

export function photoQuery (id, type) {
  return request({
    url: '/community-infos/findCommunityPhoto',
    method: 'post',
    data: { communityId: id, type: type }
  })
}

export function photoHouseTypeQuery (id) {
  return request({
    url: '/house-analysis/findHousePhoto',
    method: 'post',
    data: { houseId: id, type: '1' }
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

export function houseTypePhotoUpload (formData) {
  return request({
    url: '/house-analysis/fileUpload',
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
    data: { communityId: id, severalBedrooms: severalBedrooms }
  })
}

export function saveAnalysis (houseType) {
  return request({
    url: api.saveAnalysis,
    method: houseType.id ? 'put' : 'post',
    data: houseType
  })
}

export function deleteAnalysis (id) {
  return request({
    url: `${api.saveAnalysis}/${id}`,
    method: 'delete'
  })
}

export function getSeveralBedroomsInfo (id) {
  return request({
    url: api.getSeveralBedroomsInfo + `/${id}`,
    method: 'get'
  })
}

export function newHouseDiary (houseDiary) {
  return request({
    url: api.newHouseDiary,
    method: houseDiary.id ? 'put' : 'post',
    data: houseDiary
  })
}
export function deleteHouseDiary (id) {
  return request({
    url: api.newHouseDiary + `/${id}`,
    method: 'delete'
  })
}
export function queryHouseDiary (communityId, classificationLabel) {
  return request({
    url: api.queryHouseDiary,
    method: 'post',
    data: { communityId, classificationLabel }
  })
}
export function queryHouseQuestion (communityId) {
  return request({
    url: `${api.queryHouseQuestion}/${communityId}`,
    method: 'get'
  })
}

export function saveHouseQuestion (question) {
  return request({
    url: `${api.createHouseQuestion}`,
    method: question.id ? 'put' : 'post',
    data: question
  })
}
export function deleteHouseQuestion (id) {
  return request({
    url: api.createHouseQuestion + `/${id}`,
    method: 'delete'
  })
}

export function updateHouseQuestion (question) {
  return request({
    url: `${api.createHouseQuestion}`,
    method: 'put',
    data: question
  })
}

export function getSchools (param) {
  return request({
    url: `/community-infos/findSchoolDesc`,
    method: 'post',
    data: {}
  })
}

export function housePhotoUpload (param) {
  return request({
    url: api.housePhotoUpload,
    method: 'post',
    data: param
  })
}

export function queryTicketList () {
  return request({
    url: api.ticket,
    method: 'post',
    data: { page: 0, size: 10 }
  })
}

export function queryMyTicketList () {
  return request({
    url: api.myticket,
    method: 'post',
    data: { page: 0, size: 10 }
  })
}

export function queryTicketHistory (ticketId) {
  return request({
    url: `${api.ticketHistorys}/${ticketId}`,
    method: 'get'
  })
}

export function createTicketHistory (ticketHistory) {
  return request({
    url: api.ticketHistory,
    method: 'post',
    data: ticketHistory
  })
}

export function removeTiketOwner (id) {
  return request({
    url: `${api.ticketOwner}/${id}`,
    method: 'delete',
    data: { page: 0, size: 10 }
  })
}

export function addTiketOwner (data) {
  return request({
    url: `${api.ticketOwner}`,
    method: 'post',
    data: data
  })
}

export function queryTicketOwner (ticketId) {
  return request({
    url: `${api.ticketOwners}/${ticketId}`,
    method: 'get'
  })
}

export function queryNormalUsers () {
  return request({
    url: api.normalUsers,
    method: 'get'
  })
}

export function resetPassword (data) {
  return request({
    url: api.resetPassword,
    method: 'post',
    data: data
  })
}
