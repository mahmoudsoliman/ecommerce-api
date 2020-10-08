const { createUser, authenticate } = require('../core/user')

const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body

  const newUser = await createUser({
    firstName,
    lastName,
    email,
    password
  })

  res.send({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email
  })
}

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body

  const tokenObj = await authenticate({
    email,
    password
  })

  res.send({
    token: tokenObj.token,
    expirationDate: tokenObj.expirationDate
  })
}

module.exports = {
  signup,
  login
}