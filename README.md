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



