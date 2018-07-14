exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1001, name: 'Invoicing App', description: 'Written in Vue.js and passport', image: './vue.png', link: 'www.google.com'},
        {id: 1002, name: 'Invoicing App 2.0', description: 'Written in ReactJS and sodium', image: '../goose.png', link: 'www.google.com'},
        {id: 1003, name: 'Invoicing App 3.0', description: 'Written in AngularJS', image: '../goose.png', link: 'www.google.com'}
      ])
    })
}
