const db = require('../database/index.js')
const getPokemon = require('../helpers/getPokemon.js')

module.exports = {
  getPokemon: ('/', (req, res) => {
    getPokemon(req.body.pokemon, (pokeObj) => {
      db.save(pokeObj, (err, pokemon) => {
        if(err) {
          res.send('Pokemon not added')
        } else {
          res.send(pokemon.name);
        }
      });
    })
  })
}