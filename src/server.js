const express = require('express')
const postsRouter = require('./routes/posts')

const app = express()

app.use(express.json())
app.use('/posts', postsRouter) //en la ruta /posts monta el router postsRouter: /, /{id}, /otraCosa

module.exports = app