const productsControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
  productsControllers.getAllProducts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createNewProduct = (req, res) => {
  const data = req.body;
  if (data.name && data.category && data.price && data.isAvailable) {
    productsControllers.createProduct(data)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  }
};

const getProductById = (req, res) => {
    const id = req.params.id

    productsControllers.getProductById(id)
        .then((data) => {
          if(data){
            res.status(200).json(data)
          }else{
            res.status(404).json({ message: 'Invalid ID'})
          }
        })
        .catch((err)=> {
            res.status(404).json({ message: err.message})
        })
}

//Modificacion parcial
const patchProductById = (req, res) => {
  const id = req.params.id
  const {name, category, price, isAvailable} = req.body

  productsControllers.editProductById(id, {name, category, price, isAvailable})
    .then((response)=>{
      if(response[0]){
        res.status(200).json({
          message:`Product with Id: ${id} edited succesfully`
        })
      }else{
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch((err)=>{
      res.status(400).json({message: err.message})
    })

}

const deleteProduct = (req, res) => {
  const id = req.params.id

  productsControllers.deleteProductById(id)
    .then((response)=>{
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch((err)=>{
      res.status(400).json({message: err.message})
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    patchProductById,
    deleteProduct
}