//importing express - a web framework for node.js
const path = require('path')
const express = require('express')

const server = express()

//importing routes data from routes.js
const routes = require('./routes/routes')

//middleware

//
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', routes)


module.exports = server