const bcrypt = require('bcrypt')

const saltRounds = 10

function hash (plainText) {
    return bcrypt.hash(plainText, saltRounds)
}

function compare (plainText, hash) {
    return bcrypt.compare(plainText, hash)
}

module.exports = {
    ...bcrypt,
    hash
}