const express = require('express')
const router = express.Router()
const {Character, Stats, Episode} = require('../db/models')

router.get('/', async (req, res, next) => {
  const characters = await Character.findAll({include: [Stats, Episode]})
  res.json(characters)
})

router.get('/:characterId', async (req, res, next) => {
  try {
    let foundCharacter = await Character.findById(req.params.characterId, {
      include: [Stats, Episode]
    })
    res.json(foundCharacter)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {
    name,
    classType,
    bio,
    DEX,
    CON,
    STR,
    WIS,
    CHA,
    INT,
    headshotUrl,
    actor
  } = req.body.character

  const newCharacter = await Character.create({
    name,
    class: classType,
    bio,
    headshot: headshotUrl,
    actor
  })

  const newStats = await Stats.create({
    dexterity: DEX,
    constitution: CON,
    strength: STR,
    wisdom: WIS,
    charisma: CHA,
    intelligence: INT
  })
  newCharacter.setStat(newStats)

  res.status(200).send({
    character: newCharacter
  })
})

router.put('/:characterId', async (req, res, next) => {
  const foundChar = await Character.findById(req.params.characterId)
  foundChar.update(req.body)
  res.json({
    message: `${foundChar.name} updated`,
    character: foundChar
  })
})

router.delete('/:characterId', (req, res, next) => {
  Character.findById(req.params.characterId)
    .then(foundCharacter => {
      console.log('Character found')
      return foundCharacter.destroy()
    })
    .then(() => {
      res.send(`character destroyed`)
    })
})

module.exports = router
