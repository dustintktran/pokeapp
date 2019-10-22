const models = require('../database/models.js');

const getFavorites = (callback) => {
  models.Pokemon.find()
  .then((arrayOfPokemon) => {
    callback(arrayOfPokemon);
  }) 
}

module.exports = getFavorites;