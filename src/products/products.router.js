const router = require('express').Router()
const productsServices = require('./products.services')

//? Prefijo : /api/v1/products

//Ruta para todas los productos 
router.get('/', productsServices.getAllProducts)
router.post('/', productsServices.createNewProduct)

//Ruta para todas los productos con el parametro id
router.get('/:id', productsServices.getProductById)
router.delete('/:id', productsServices.deleteProduct)
router.patch('/:id', productsServices.patchProductById)

module.exports = router