const express = require('express');
const app = express();
const config = require('config');
const port = config.get('port');

const basicController = require('./controllers/basic.controller');

// simple get befehl
app.get('/simplequery', basicController.basicQuery);


const server = app.listen(port, () => {
    console.log('Server running on ' + port);
})
