const User = require('./user')
const Character = require('./character')
const City = require('./city')
const Episode = require('./episode')
const Stats = require('./stats')
const HistoricalItem = require('./historicalItem');

//define relationships
Character.hasOne(Stats)
Stats.belongsTo(Character)
Episode.belongsToMany(Character, {through: 'charactersToEpisodes'})
Character.belongsToMany(Episode, {through: 'charactersToEpisodes'})
City.hasMany(Episode)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  City,
  Character,
  Episode,
  Stats,
  HistoricalItem
}
