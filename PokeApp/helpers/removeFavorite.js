const models = require('../database/models.js');

const removeFavorite = (pokeName) => {
  models.Pokemon.findOneAndRemove({name: pokeName}, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Pokemon removed from favorites');
    }
  })
}

module.exports = removeFavorite;