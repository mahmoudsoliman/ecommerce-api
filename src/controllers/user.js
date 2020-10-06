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

  return {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email
  }
}

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body

  return authenticate({
    email,
    password
  })
}

module.exports = {
  signup,
  login
}