const express = require('express')
const writers = require('../usecases/writers')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allWriters = await writers.getAllWriters()
        response.json({
            message: 'All writers',
            success: true,
            data: {
                writer: allWriters
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            message: error.message,
            success: false,
            error
        })
    }
})

router.post('/', async (request, response) => {
    try {
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
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            message: error.message,
            success: false,
            error
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
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
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            message: error.message,
            success: false,
            error
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const deletedWriter = await writers.deleteById(id)
        response.json({
            message: 'Writer deleted',
            success: true,
            data: {
                writer: deletedWriter
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            message: error.message,
            success: false,
            error
        })
    }
})

module.exports = router