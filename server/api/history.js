const express = require('express');
const router = express.Router();
const {HistoricalItem} = require('../db/models');



router.get('/', async(req, res, next) => {

    const allItems = await HistoricalItem.findAll({order: [['category'], ['name']]});
    res.send(allItems);
})



router.get('/:itemId', async(req, res, next) => {
  const {itemId} = req.params
  const historicalItem = await HistoricalItem.findById(itemId);
  if (!historicalItem) next();
  res.send(historicalItem);
})

module.exports = router;
