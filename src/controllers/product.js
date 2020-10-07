const { createProduct, listProducts, getProductDetails, deleteManyProducts} = require('../core/product')

const create = async (req, res) => {
  const {
    name,
    shortDescription,
    fullDescription,
    image,
    price
  } = req.body
  
  return createProduct({
    name,
    shortDescription,
    fullDescription,
    image,
    price
  })
}

const list = async (req, res) => {
  return listProducts()
}

const get = async (req, res) => {
  const productId = req.params.id
  return getProductDetails(productId)
}

const deleteMany = async (req, res) => {
  const productIds = req.body.productIds

  await deleteMany(productIds)
}

module.exports = {
  create,
  list,
  get,
  deleteMany
}