const router = require('express').Router();
const controller = require('./controller.js')

router
  .route('/pokemon')
  .post(controller.getPokemon)


module.exports = router;