const express = require('express')
const router = express.Router()
const {Character, Stats} = require('../db/models')

router.get('/', async (req, res, next) => {
  const characters = await Character.findAll({include: [Stats]})
  res.json(characters)
})

router.get('/:characterId', async (req, res, next) => {
  try {
    let foundCharacter = await Character.findById(req.params.characterId, {
      include: [Stats]
    })
    res.json(foundCharacter)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const newChar = await Character.create(req.body)
  res.status(200).send({
    message: `Character created`,
    character: newChar
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
