const _ = require('lodash')
const Boom = require('boom')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { User, AccessToken } = require('../models')

const _validateNewUserAlreadyExists = async (email) => {
  const existingUser = await User.findOne({
    where: { email }
  })
  
  return !_.isNil(existingUser)
}

const createUser = async ({firstName, lastName, email, password}) => {
  const userExists = await _validateNewUserAlreadyExists(email)
  if(userExists) throw Boom.badRequest('User already exists with this email')
  
  return User.create({
    firstName,
    lastName,
    email,
    password: await bcrypt.hash(password, 10)
  })
}

const _generateToken = async () => {
  let token = await crypto.randomBytes(16)
  token = token.toString('hex')
  const expirationDate = new Date(Date.now() + 60*60*1000)
  return {
    token,
    expirationDate
  }
}
const authenticate = async ({email, password}) => {
  const user = await User.findOne({
    where: { email }
  })

  if(_.isNil(user)) throw Boom.notFound('User not found')
  const isValidPassword = await bcrypt.compare(password, user.password)
  if(!isValidPassword) throw Boom.unauthorized('Wrong Credintils')

  const newToken = await _generateToken()
  const accessToken = await AccessToken.create(newToken)

  return accessToken
}

module.exports = {
  createUser,
  authenticate
}