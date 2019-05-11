const request = require('request');

const getPokemonInfo = (nameOrId, callback) => {
  let reqURL = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  let options = {
    url: reqURL
  }
  request(options, (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      let parsed = JSON.parse(body);
      //    console.log(parsed.name); 
      callback(parsed)
    }
  })
}

// getPokemonInfo(55);

module.exports = getPokemonInfo;