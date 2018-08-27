const Sequelize = require('sequelize')
const sqlDB = require('../db')

const Character = sqlDB.define('Character', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  class: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT
  },
  headshot: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplementaryPictures: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  actor: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Character.beforeValidate(character => {
  if (character.supplementaryPictures && typeof character === 'string')
    character.supplementaryPictures = character.supplementaryPictures.split(',')
})

module.exports = Character
