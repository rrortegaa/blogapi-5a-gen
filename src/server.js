const express = require('express')
const postsRouter = require('./routes/posts')
const writersRouter = require('./routes/writers')

const app = express()

app.use(express.json())
app.use('/posts', postsRouter) //en la ruta /posts monta el router postsRouter: /, /{id}, /otraCosa
app.use('/writers', writersRouter)

module.exports = app