const mongoose = require('mongoose');
const db = require('./index.js')


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

let profileSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  password: String,
  salt: String,
  name: String,
  age: Number,
  favorites: [mongoose.Schema.Types.Mixed],
  about: String,
  friends: [String],
  profilePic: String
})

let Profile = mongoose.model('profile', profileSchema, 'profiles');

module.exports = {
  Pokemon, Profile
}