//importing express - a web framework for node.js
const path = require('path')
const express = require('express')

const server = express()

//importing routes data from egroute.js
const routes = require('./routes/egroute')

//middleware
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/egroute', routes)


module.exports = server