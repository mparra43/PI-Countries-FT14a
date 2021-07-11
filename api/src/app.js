const express= require('express');
const morgan = require('morgan');
require('dotenv').config();
const server= express();

require('./db.js');

server.use(morgan('dev'));
//parceo de los req
server.use(express.json() );
//server.use(express.static('client'));

// rutas

server.use('/api/auth', require('./routes/auth') );
server.use('/api', require('./routes/country') );
server.use('/api', require('./routes/activity') );



module.exports = server;