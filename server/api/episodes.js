const express = require('express')
const router = express.Router()
const {Episode, Character} = require('../db/models')

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
      cast,
      series,
      audio,
      bookTitle,
      bookNumber,
      chapterNumber,
      episodeSummary
    } = req.body
    const newEpisode = await Episode.create(
      title,
      icon,
      cast,
      series,
      audio,
      bookTitle,
      bookNumber,
      chapterNumber,
      episodeSummary
    )
    const episodeCharacters = cast.split(',')
    episodeCharacters.forEach(characterName => {
      let foundCharacter = Character.findOne({
        where: {
          name: characterName
        }
      })
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
  const foundEpisode = await Episode.findById(req.params.episodeId)
  return foundEpisode.update(req.body).then(updatedEpisode => {
    res
      .json({
        message: `${updatedEpisode.title} updated`,
        episode: updatedEpisode
      })
      .catch(err => {
        next(err)
      })
  })
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
