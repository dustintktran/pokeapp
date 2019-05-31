const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokeapp', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', () => console.log('Connection to mongo successful'));

let pokeSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  type: [String],
  sprite: String,
  hp: Number,
  attack: Number,
  defense: Number,
  spattack: Number,
  spdefense: Number,
  speed: Number
})

let Pokemon = mongoose.model('pokemon', pokeSchema);

const save = (input, callback) => {
  // console.log(input);
  let newPoke;
  if(input.types[1]) {
      newPoke = new Pokemon({
      id: input.id,
      name: input.name,
      type: [input.types[0].type.name,input.types[1].type.name],
      sprite: input.sprites.front_default,
      hp: input.stats[5].base_stat,
      attack: input.stats[4].base_stat,
      defense: input.stats[3].base_stat,
      spattack: input.stats[2].base_stat,
      spdefense: input.stats[1].base_stat,
      speed: input.stats[0].base_stat
    })
  } else {
      newPoke = new Pokemon({
      id: input.id,
      name: input.name,
      type: [input.types[0].type.name],
      sprite: input.sprites.front_default,
      hp: input.stats[5].base_stat,
      attack: input.stats[4].base_stat,
      defense: input.stats[3].base_stat,
      spattack: input.stats[2].base_stat,
      spdefense: input.stats[1].base_stat,
      speed: input.stats[0].base_stat
    })
  }

  newPoke.save((err, newPoke) => {
    if(err) {
      console.log(err);
      callback(err, newPoke)
    } else {
      console.log('Pokemon: ', newPoke.name, ' added');
      callback(null, newPoke)
    }
  })

}

module.exports.save = save;