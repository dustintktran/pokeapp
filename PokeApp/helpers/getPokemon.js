const request = require('request');

const getPokemonInfo = (nameOrId, callback) => {
  console.log(nameOrId)
  let reqURL = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  let options = {
    url: reqURL
  }
  request(options, (err, res, body) => {
    if (err || body === 'Not Found') {
      console.log('something went wrong');
    } else {
      let parsed = JSON.parse(body);
      let id = parsed.id;
      let name = parsed.name;
      let abilities = parsed.abilities;
      let forms = parsed.forms;
      let moves = parsed.moves;
      let stats = {};
      for(var i = 0; i < 6; i++) {
          stats[parsed.stats[i].stat.name] = parsed.stats[i].base_stat;
      }
      // let stats = parsed.stats;
      let types = parsed.types;
      let sprites = parsed.sprites;
      //, name, abilities, forms, moves, stats, types, sprites
      let basicPokeInfo = {id, name, abilities, forms, moves, stats, types, sprites};

      callback(basicPokeInfo);
    }
  })
}

// getPokemonInfo(55, console.log);

module.exports = getPokemonInfo;