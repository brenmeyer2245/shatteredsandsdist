const express = require('express')
const router = express.Router()
const {City, Episode} = require('../db/models')

router.get('/', async (req, res, next) => {
  const cities = await City.findAll()
  res.json(cities)
})

router.get('/:cityId', async (req, res, next) => {
  const city = await City.findById(req.params.cityId, {
    include: [Episode]
  })
  res.json(city)
})

router.post('/', async (req, res, next) => {
  const {name, description, pictures} = req.body
  try {
    const newCity = await City.create({name, description, pictures})
    res.status(200).send({
      message: `${newCity.name} created`,
      city: newCity
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
