//importing the data from the server.js file
const server = require('./server')

//declaring the local port
const port = 3000

//
server.listen( () => {
console.log('Server is listening on port', port)
})