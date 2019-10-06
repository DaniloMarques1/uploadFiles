const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig); // aqui infornma onde salvar

const ImageController = require('./controllers/ImageController');

//arqui informa o que salvar
routes.post('/image', upload.single('image_name'),ImageController.store);

routes.get('/image', ImageController.index);

module.exports = routes; 