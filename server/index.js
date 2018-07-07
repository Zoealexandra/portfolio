//importing the data from the server.js file
const server = require('./server')

//declaring the local port
const port = 3000

//
server.listen(port, () => {
    //eslint-disable-next-line no-console
    console.log('Server listening on port', port)
})