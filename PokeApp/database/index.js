const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokeapp', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', console.log('Connection to mongo successful'));

let pokeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: [String],
    hp: Number,
    attack: Number,
    defense: Number,
    spattack: Number,
    spdefense: Number,
    speed: Number
})

let pokemon = mongoose.model('pokemon', pokeSchema);

const save = (input) => {

}

module.exports = {
    save: save,
}