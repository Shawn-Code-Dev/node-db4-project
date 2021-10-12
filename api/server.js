const express = require('express')
const helmet = require('helmet')

const recipeRouter = require('./recipe/recipe-router')

const server = express()

server.use('/api/recipes', recipeRouter)

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
      message: err.message
  })
})

server.use(helmet())
server.use(express.json())