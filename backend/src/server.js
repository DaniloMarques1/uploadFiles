const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const server = express(); // criando a aplicacao



const routes = require('./routes');

mongoose.connect('mongodb://localhost/uploads', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
server.use(routes);

server.listen(5000);