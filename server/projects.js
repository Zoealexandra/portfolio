const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

// const crypto = require('./crypto')

function getAllProjects (db = knex) {
  return db('projects')
    .select(
      'id as projectId',
      'name as title',
      'description',
      'image',
      'link'
    )
}

module.exports = {
  getAllProjects
}