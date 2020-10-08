const bcrypt = require('bcryptjs')
const models = require('../../src/models')

const cleanUpDatabase = async () => {
  await models.AccessToken.destroy({ where: {}, force: true })
  await models.User.destroy({ where: {}, force: true })
  await models.Product.destroy({ where: {}, force: true })
}

const generateUser = async (customData = {}) => {
  const defaults = {
    firstName: "random",
    lastName: "name",
    email: "random.email@test.com",
    password: await bcrypt.hash("123456", 10)
  }
  return models.User.create({
    ...defaults,
    ...customData
  })
}

module.exports = {
  cleanUpDatabase,
  generateUser
}
