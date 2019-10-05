const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokeapp', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', () => console.log('Connection to mongo successful'));

let pokeSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  abilities: [mongoose.Schema.Types.Mixed],
  forms: [mongoose.Schema.Types.Mixed],
  moves: [mongoose.Schema.Types.Mixed],
  stats: mongoose.Schema.Types.Mixed,
  types: [mongoose.Schema.Types.Mixed],
  sprites: mongoose.Schema.Types.Mixed,
})

let Pokemon = mongoose.model('pokemon', pokeSchema, 'favorites');


module.exports = {
  Pokemon: Pokemon
}