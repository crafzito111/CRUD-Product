const { response } = require("express");
const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = async () => {
  const data = await Products.findAll();
  return data;
};

const createProduct = async (data) => {
  const newProduct = {
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  };
  const response = await Products.create(newProduct);
  return response;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });
  return data;
};



const editProductById = async (id, data) => {
  const response = await Products.update(data, {
    where: {
      id,
    },
  });
  return response;
};


const deleteProductById = async (id) => {
  const data = await Products.destroy({
    where: {
        id
    }
  });
  return data
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  editProductById,
  deleteProductById
};
