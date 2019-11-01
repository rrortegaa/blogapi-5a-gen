require('dotenv').config()

const app = require('./src/server')
const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db connected')
    app.listen(8080, () => {  // levantamos el servidor aqui para asegurarnos que levantó la BD 
      console.log('server running')
    })
  })
  .catch(error => {
    console.error('ERROR: ', error)
  })

