const {User, Episode, Character, Stats, City} = require('../server/db/models')
const db = require('../server/db/db')
const characters = require('./character.json')
const charactersToEpisodes = require('./charactersToEpisodes.json')
const cities = require('./cities.json')
const episodes = require('./episodes.json')
const stats = require('./stats.json')

async function sharakhaiSeed() {
  await db.sync({force: true})
  console.log('DB has been synced')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  //seed Characters
  await Character.bulkCreate(characters)
  console.log('seeded Characters')
  //seed Stats
  await Stats.bulkCreate(stats)
  console.log('seeded Stats')

  //seed Cities
  await City.bulkCreate(cities)
  console.log('seeded Cities')

  //seed Episodes
  await Episode.bulkCreate(episodes)
  console.log('seeded Episodes')

  const promiseArr = []
  charactersToEpisodes.forEach(characterToEpisodeInstance => {
    let promise = Character.findById(
      characterToEpisodeInstance.characterId
    ).then(character => {
      return character.addEpisode(characterToEpisodeInstance.episodeId)
    })
    promiseArr.push(promise)
  })
  await Promise.all(promiseArr)
  console.log(
    `seeded ${charactersToEpisodes.length}episode to character associations`
  )
}

async function executeSeed() {
  console.log('Running Seed')
  try {
    await sharakhaiSeed()
  } catch (err) {
    console.log(err)
    process.exitCode = 1
  } finally {
    console.log('Closing Connection')
    await db.close()
    console.log('Connection now closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  executeSeed()
}

module.export = executeSeed
