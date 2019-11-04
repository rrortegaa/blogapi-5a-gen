const express = require('express')
const posts = require('../usecases/posts')

const router = express.Router()

router.post('/', async (request, response) => { // marcamos la func anónima como async porque es la función que contiene a la función await (de la que esperamos la respuesta)
    const {
        title,
        description,
        authorName,
        creationDate,
        readTime,
        image
    } = request.body

    const newPost =  await posts.create(title, description, authorName, creationDate, readTime, image)
    // marcamos esta función con await para esperar su respuesta

    response.json({
        message: 'Post created',
        success: true,
        data: {
            post: newPost
        }
    })
})

router.get('/', async (request, response) => {
    const allPosts = await posts.getAll()
    response.json({
        message: 'All posts',
        success: true,
        data: {
            posts: allPosts
        }
    })
})

router.patch('/:id', async (request, response) => {
    const { params, body: data } = request
    const { id } = params

    const updatedPost = await posts.updateById(id, data)
        response.json({
            message: 'Post updated',
            success: true,
            data: {
                post: updatedPost
            }
        })
    
    // const { body: data = {}} = request // en una deconstrucción podemos cambiar el nombre de body a data y si no encuentras body => le asigno valor con {} (objeto vacío)

//     const { body: data = {}} = request
//     {
//         title,
//         description,
//         authorName,
//         creationDate,
//         readTime,
//         image
//     } = request.body
    
//     const updatePost = await posts.update(title, description, authorName, creationDate, readTime, image)
})

router.delete('/:id', async (request, response) => { // : ':' es un placeholder 
    const { id } = request.params // router.delete{:id, :x}, () => { const { id, x } ...}
    const deletedPost = await posts.deleteById(id)

    response.json({
        message: 'delete id',
        success: true,
        data: {
            post: deletedPost
        }
    })
})

module.exports = router