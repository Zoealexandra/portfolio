exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1001, name: 'name 1', description: 'goose', image: '../goose.png', link: 'www.google.com'},
        {id: 1002, name: 'name 2', description: 'goose', image: '../goose.png', link: 'www.google.com'},
        {id: 1003, name: 'name 3', description: 'goose', image: '../goose.png', link: 'www.google.com'}
      ])
    })
}
