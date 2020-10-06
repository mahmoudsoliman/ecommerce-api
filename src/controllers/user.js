const { createUser } = require('../core/user')

const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body

  return createUser({
    firstName,
    lastName,
    email,
    password
  })
}

module.exports = {
  signup
}