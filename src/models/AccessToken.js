const { DataTypes } = require('sequelize')

module.exports = function (sequelize) {
  const AccessToken = sequelize.define('AccessToken', {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  AccessToken.associate = function (models) {
    models.AccessToken.belongsTo(models.User)
  }

  return AccessToken
}
