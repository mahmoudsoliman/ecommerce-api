const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://user:pass@example.com:3306/inventory')

const db = {
  User: require('./User')(sequelize),
  Product: require('./Product')(sequelize)
}

sequelize.sync()

module.exports = db
