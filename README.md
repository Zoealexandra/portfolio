# Full-stack-boilerplate
A go-to set up for full stack

This branch is designed with comments throughout the code to provide explanations on the how and why the code exists

## Webpack module bundler
1.  Adding the base webpack module builder
  ```Yarn add webpack```

2. Adding a live reload when using webpack --watch
  ```yarn add webpack-livereload-plugin```

Add the following to the webpack.config.js

  ```
  // webpack.config.js
  
  var LiveReloadPlugin = require('webpack-livereload-plugin');
  
  module.exports = {
    plugins: [
      new LiveReloadPlugin(options)
    ]
  }
  ```

  ## Babel



  ## Reactjs



  ## Testing



  ## Knex

We'll be using the Knex module to talk to our SQLite3 database. (instructions taken from class exercise)


### Setup

* Install dependencies.

  ```sh
  yarn add knex sqlite3
  yarn add jest --dev
  ```

* Create `knex` and `test` scripts in `package.json`.

  ```js
  "scripts": {
    "knex": "knex",
    "test": "jest"
  }
  ```

  This allows us to use the `knex` CLI tool, without having to install `knex` globally.

* Create the knex config file (`knexfile.js`).

  ```sh
  yarn knex init
  ```

  Edit your `knexfile` so it has a `test` property:

  ```js
    test: {
      client: 'sqlite3',
      connection: {
        filename: ':memory:'
      },
      seeds: {
        directory: './tests/seeds'
      }
    }
  ```

  This introduces a new idea: that we can run an _in-memory database_! This database will only last as long as our tests, and vanishes in a puff of smoke afterwards. Because it is in memory and not on the filesystem, it works extremely quickly and is not vulnerable to any problems that might occur with the filesystem (hard disk full or busy, permissions problems with directories, etc).


## Set up the database

* Add a migration for the `default` table.

  ```sh
  yarn knex migrate:make default
  ```

  1. Edit the new file in the new `migrations` folder so it will add (and drop) a table called `default` with the following fields:

      * `id` (auto incrementing)
      * `name`: string

  The documentation for [`createTableIfNotExists`](http://knexjs.org/#Schema-createTableIfNotExists) and [`dropTableIfExists`](http://knexjs.org/#Schema-dropTableIfExists) might be helpful.

  2. Use `yarn knex migrate:latest` to apply the changes to the database.

* Add some seed data.

  ```sh
  yarn knex seed:make default
  ```

  1. Edit the new file in the new `seeds` folder so it will add new tasks to the `default` table.

  The documentation for [`del`](http://knexjs.org/#Builder-del%20/%20delete) and [`insert`](http://knexjs.org/#Builder-insert) might be helpful.

  2. Run `yarn knex seed:run` to add the new data to the database.




