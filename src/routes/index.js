const express = require('express')

const router = express.Router()

const {
  userController,
  productController
} = require('../controllers')

const {
  userValidators
} = require('../validations')

router.post('/login', userValidators.loginValidator, userController.login)
router.post('/signup', userValidators.signupValidator, userController.signup)


router.post('/product', productController.create)
router.get('/product', productController.list)
router.get('/product/:id', productController.get)
router.delete('/product', productController.deleteMany)


module.exports = router

