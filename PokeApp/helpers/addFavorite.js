const db = require('../database/index.js');


const addFavorite = (pokeObj) => {
  var pokemon = new db.Pokemon(pokeObj)
  pokemon.save((err, pokeObj) => {
    if(err) {
      console.log(err);
    } else {
      console.log(pokeObj.name, ' has been added to favorites')
    }
  })
}

module.exports = addFavorite;