const express= require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const server= express();

require('./db.js');

server.use(morgan('dev'));

// limitar las peticiones a mi sitio
server.use(cors())

//server.use(express.static('client'));

//parceo de los req
server.use(express.json() );

// rutas

server.use('/pokemon/auth', require('./routes/auth') );
server.use('/pokemon', require('./routes/pokemon') );




module.exports = server;