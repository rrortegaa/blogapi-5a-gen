
const mongoose = require('mongoose')

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env

function connect () {
  const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster-5a-gen-etti3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  return mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true  })
}

module.exports = {
  connect
}

