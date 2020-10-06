const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:password@localhost:3306/inventory')

const db = {
  User: require('./User')(sequelize),
  Product: require('./Product')(sequelize),
  AccessToken: require('./AccessToken')(sequelize)
}

module.exports = db
