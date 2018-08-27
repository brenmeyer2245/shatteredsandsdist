const Sequelize = require('sequelize')
const sqlDB = require('../db')

const City = sqlDB.define('City', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  pictures: {
    type: Sequelize.TEXT
  }
})

module.exports = City
