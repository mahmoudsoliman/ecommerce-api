const Joi = require('joi')
const { celebrate } = require('celebrate')

const loginValidator = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
}

module.exports = {
  loginValidator: celebrate(loginValidator)
}