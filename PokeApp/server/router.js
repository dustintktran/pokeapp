const router = require('express').Router();
const controller = require('./controller.js')

router.route('/find').post(controller.getPokemon);
router.route('/addfavorite').post(controller.addFavorite);
router.route('/removefavorite').post(controller.removeFavorite);
router.route('/getfavorites').get(controller.getFavorites);


module.exports = router;