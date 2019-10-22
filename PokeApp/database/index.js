const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokeapp', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', () => console.log('Connection to mongo successful'));

module.exports = db;