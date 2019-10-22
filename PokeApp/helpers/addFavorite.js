const models = require('../database/models.js');


const addFavorite = (pokeObj) => {
  let pokemon = new models.Pokemon(pokeObj)
  pokemon.save((err, pokeObj) => {
    if(err) {
      console.log(err);
    } else {
      console.log(pokeObj.name, ' has been added to favorites')
    }
  })
}

module.exports = addFavorite;