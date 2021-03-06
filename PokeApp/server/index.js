const express = require('express');
const parser = require('body-parser');
const router = require('./router.js')
const db = require('../database/index.js')

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));
app.use(express.static('client/dist/'));
app.use('/api', router);

app.listen(8080, console.log('App running on port 8080'));

