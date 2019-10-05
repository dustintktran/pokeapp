const db = require('../database/index.js');

const getFavorites = (callback) => {
  db.Pokemon.find()
  .then((arrayOfPokemon) => {
    callback(arrayOfPokemon);
  }) 
}

module.exports = getFavorites;