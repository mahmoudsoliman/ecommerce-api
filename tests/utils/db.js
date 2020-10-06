const models = require('../../src/models')

const cleanUpDatabase = async () => {
  await models.AccessToken.destroy({ where: {}, force: true })
  await models.User.destroy({ where: {}, force: true })
  await models.Product.destroy({ where: {}, force: true })
}

module.exports = {
  cleanUpDatabase
}
