const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const productsRouter = require('./products/products.router')

const app = express()

const { port } = require('./config')

db.authenticate()
//? Accion informativa de si las credenciales son correctas
    .then(()=> console.log('DB Authenticated Succesfully'))
    .catch((err)=> console.log(err))


db.sync()
//? Sincroniza los modelos con la base de datos, creando las tablas
    .then(()=> console.log('Database synce'))
    .catch((err)=> console.log(err))    

initModels()
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({Message: 'All good'})
})

app.use('/api/v1/products', productsRouter)

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})