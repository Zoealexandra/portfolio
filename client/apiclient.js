import request from 'superagent'

export const BASE_ROUTE = '/api/v1/route'
export const PROJECT_ROUTE = BASE_ROUTE + '/projects'

export function getAllProjects () {
  return request.get(`${PROJECT_ROUTE}/`)
    .then(res => res.body)
}