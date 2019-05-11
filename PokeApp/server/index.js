const express = require('express');
const parser = require('body-parser');
const router = require('./router.js')

const app = express();
app.use(parser.json());
app.use(express.static('client/dist/'));
app.use('/api', router);

app.listen(420, console.log('App running on port 420'));

