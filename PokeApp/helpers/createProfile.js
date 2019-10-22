// const models = require('../database/models.js');

const createProfile = (email, pass) => { //Before this function is called: email === unique, email is valid, pass is certain length and a string
  let salt = createSalt();
  let password = hash(pass + salt);
  let profile = {};
  profile.email = email;
  profile.password = password;
  profile.salt = salt;
  let newProfile = new models.Profile(profile);
  newProfile.save((err, prof) => {
    if(err) {
      console.log(err);
    } else {
      console.log(prof);
    }
  })
}

const hash = (string) => {
  var h = 0, l = string.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + string.charCodeAt(i++) | 0;
  return h;
}

function createSalt(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 20; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}