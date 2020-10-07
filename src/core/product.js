const { Product } = require('../models')

const createProduct = async ({name, shortDescription, fullDescription, image, price}) => {
  return Product.create({
    name,
    shortDescription,
    fullDescription,
    image,
    price
  })
}

const listProducts = async () => {
  return Product.findAll({
    where: {}
  })
}

const getProductDetails = async (productId) => {
  return Product.findOne({
    where: {
      id: productId
    }
  })
}

const deleteManyProducts = async(productIds) => {
  await Product.destroy({
    where: {
      id: productIds
    }
  })
}


module.exports = {
  createProduct,
  listProducts,
  getProductDetails,
  deleteManyProducts
}