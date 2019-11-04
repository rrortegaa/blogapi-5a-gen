const express = require('express')
const writers = require('../usecases/writers')

const router = express.Router()

router.get('/', async (request, response) => {
    const allWriters = await writers.getAllWriters()
    response.json({
        message: 'All writers',
        success: true,
        data: {
            writer: allWriters
        }
    })
})

router.post('/', async (request, response) => {
    const {
        name,
        age,
        email,
        photo
    } = request.body

    const newWriter = await writers.create(name, age, email, photo)
    response.json({
        message: 'Writer created',
        success: true,
        data: {
            writer: newWriter
        }
    })
})

router.patch('/:id', async (request, response) => {
    const { params, body: data } = request
    const { id } = params

    const updatedWriter = await writers.updateById(id, data)
    response.json({
        message: 'Writer Updated',
        success: true,
        data: {
            writer: updatedWriter
        }
    })
})

router.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedWriter = await writers.deleteById(id)
    response.json({
        message: 'Writer deleted',
        success: true,
        data: {
            writer: deletedWriter
        }
    })
})

module.exports = router