const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const {Character, Episode} = require('../db/models');


router.get('/:queryString', async (req, res, next) => {
  try{
    let {queryString} = req.params;
    let episodes = await Episode.findAll().filter(episode => {
      return episode.title.toUpperCase().includes(queryString.toUpperCase());
    }).map(episode => {
      let {id, title} = episode;
      return {id, title, type: 'episode'};
     });

    let characters = await Character.findAll().filter(character => {
      return character.name.toUpperCase().includes(queryString.toUpperCase());
    }).map(character => {
     let {id, name} = character;
     return {id, name, type: 'character'};
    });

    res.json(episodes.concat(characters));
  } catch(err){
    next(err);
  }
})

module.exports = router;
