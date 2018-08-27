const Sequelize = require('sequelize')
const sqlDB = require('../db')

//const seed = require('./seedfile');
const Stats = sqlDB.define('Stats', {
  dexterity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  },
  constitution: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  },
  wisdom: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  },
  intelligence: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  },
  strength: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  },
  charisma: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  }
})

module.exports = Stats
