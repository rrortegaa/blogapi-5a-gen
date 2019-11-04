const Writer = require('../models/writer')

function create (name, age, email, photo){
    const writer = new Writer ({ name, age, email, photo })
    return writer.save()
}

function getAllWriters () {
    return Writer.find()
}

function updateById (id, data) {
    return Writer.findByIdAndUpdate(id, data)
}

function deleteById (id) {
    return Writer.findOneAndDelete(id)
}

module.exports = {
    create,
    getAllWriters,
    updateById,
    deleteById
}