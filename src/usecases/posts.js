const Post = require('../models/post')

function create (title, description, authorName, creationDate, readTime, image) {
    const post = new Post ({ title, description, authorName, creationDate, readTime, image })
    return post.save() // .save es un método asíncrono
}

function getAll () {
    return Post.find(   )
}

function getById (id) {
    return Post.findById(id)
}

function updateById (id, data) {
    return Post.findByIdAndUpdate(id, data)
    // const post = new Post ({ title, description, authorName, creationDate, readTime, image })
    // return post.update()
}

function deleteById (id) {
    return Post.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}