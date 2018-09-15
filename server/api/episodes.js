const express = require('express')
const router = express.Router()
const {Episode, Character, City} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const episodes = await Episode.findAll({order: [['id', 'DESC']]})
    res.json(episodes)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {
      title,
      icon,
      series,
      audio,
      bookTitle,
      bookNumber,
      chapterNumber,
      episodeSummary,
      episodeCharacters,
      CityId
    } = req.body.episode

    const newEpisode = await Episode.create({
      title,
      icon,
      series,
      audio,
      bookTitle,
      bookNumber,
      chapterNumber,
      episodeSummary,
      episodeCharacters,
      CityId
    })

    episodeCharacters.forEach(async characterId => {
      let foundCharacter = await Character.findById(characterId)
      if (foundCharacter) foundCharacter.addEpisode(newEpisode)
    })
    res.status(200).send({
      episode: newEpisode
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:episodeId', async (req, res, next) => {
  try {
    const foundEpisode = await Episode.findById(req.params.episodeId, {
      include: [Character]
    })
    res.json(foundEpisode)
  } catch (err) {
    next(err)
  }
})

router.put('/:episodeId', async (req, res, next) => {
  try {
    const foundEpisode = await Episode.findById(req.params.episodeId, {
      include: [Character]
    })
    const {
      title,
      icon,
      series,
      audio,
      bookTitle,
      bookNumber,
      chapterNumber,
      episodeSummary,
      episodeCharacters,
      CityId
    } = req.body

    const updatedEpisode = await foundEpisode.update({
      title,
      icon,
      series,
      audio,
      bookTitle,
      bookNumber,
      chapterNumber,
      episodeSummary,
      CityId
    })
    let chars = foundEpisode.Characters
    //remove characters
    await chars.forEach(async character => {
      const {id} = character.dataValues
      if (!episodeCharacters[id]) {
        const removal = await Character.findById(id)
        foundEpisode.removeCharacter(removal)
      } else {
        delete episodeCharacters[id]
      }
    })
    //add characters
    await Object.keys(episodeCharacters).forEach(async charId => {
      const addedCharacter = await Character.findById(charId)
      foundEpisode.addCharacter(addedCharacter)
    })

    res.json({
      message: `${updatedEpisode.title} updated`,
      episode: updatedEpisode
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:episodeId', async (req, res, next) => {
  try {
    const foundEpisode = await Episode.findById(req.params.episodeId)
    await foundEpisode.destroy()
    res.send({message: `Episode Destroyed`})
  } catch (err) {
    next(err)
  }
})

module.exports = router
