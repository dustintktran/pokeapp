const db = require('../database/index.js');

const removeFavorite = (pokeName) => {
  db.Pokemon.findOneAndRemove({name: pokeName}, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Pokemon removed from favorites');
    }
  })
}

module.exports = removeFavorite;