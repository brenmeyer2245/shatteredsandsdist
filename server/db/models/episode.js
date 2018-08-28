const Sequelize = require('sequelize')
const sqlDB = require('../db')

const Episode = sqlDB.define('Episode', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      emptyString: true
    }
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cast: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   emptyString: true
    // }
  },
  audio: {
    type: Sequelize.STRING
  },

  series: {
    type: Sequelize.STRING,
    allowNull: false
  },

  bookTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bookNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  chapterNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  episodeSummary: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = Episode
