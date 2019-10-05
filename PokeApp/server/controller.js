const db = require('../database/index.js');
const getPokemon = require('../helpers/getPokemon.js');
const addFavorite = require('../helpers/addFavorite.js');
const removeFavorite = require('../helpers/removeFavorite.js');
const getFavorites = require('../helpers/getFavorites.js');

module.exports = {
  getPokemon: ('/', (req, res) => {
    getPokemon(req.body.pokemon, (pokeObj) => {
      res.send(pokeObj);
    })
  }),
  addFavorite: ('/', (req, res) => {
    getPokemon(req.body.pokemon, (pokeObj) => {
      addFavorite(pokeObj);
    })
  }),
  removeFavorite: ('/', (req, res) => {
    removeFavorite(req.body.pokemon);
    //req.body.pokemon === pokemon id
    //find pokemon in db and remove it
  }),
  getFavorites: ('/', (req, res) => {
    getFavorites((array) => {
      res.send(array);
    })
  })
}