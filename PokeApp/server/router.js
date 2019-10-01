const router = require('express').Router();
const controller = require('./controller.js')

router.route('/find').post(controller.getPokemon);
router.route('/save').post(controller.savePokemon);


module.exports = router;