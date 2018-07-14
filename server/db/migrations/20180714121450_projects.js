exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('image')
    table.string('link')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects')
}