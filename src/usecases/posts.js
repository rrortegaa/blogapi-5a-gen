const Post = require('../models/post')

function create (title, description, authorName, creationDate, readTime, image) {
    const post = new Post ({ title, description, authorName, creationDate, readTime, image })
    return post.save() // .save es un método asíncrono
}

function getAll () {
    return Post.find(   )
}

function update (id) {
    const post = new Post ({ title, description, authorName, creationDate, readTime, image })
    return post.update()
}

function del (id) {
    return Post.findByIdAndDelete(id, () => {

    })
}

module.exports = {
    create,
    getAll,
    update,
    del
}