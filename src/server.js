const express = require('express')
const cors = require('cors')
const postsRouter = require('./routes/posts')
const writersRouter = require('./routes/writers')
const usersRouter = require('./routes/users')
const logger = require('./middlewares/logger')

const app = express()

app.use(express.json()) // middleware de express, se ejecuta porque es una función que nos regresa otra función (p.e. función json nos regresa otra función) 
app.use(cors())
app.use(logger) // esta función no  nos regresa otra función, solo la estamos definiendo y no ejecutando
app.use('/posts', postsRouter) //en la ruta /posts monta el router postsRouter: /, /{id}, /otraCosa
app.use('/writers', writersRouter)
app.use('/users', usersRouter)

module.exports = app