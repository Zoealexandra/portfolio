exports.up = (knex, Promise) => {
  return knex.schema.createTable('default', table => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('default')
}