const { DataTypes } = require('sequelize')

module.exports = function (sequelize) {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  User.associate = function (models) {
    models.User.hasMany(models.AccessToken)
  }
  return User
}
