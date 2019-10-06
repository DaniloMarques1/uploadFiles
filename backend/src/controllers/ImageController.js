const ImageModel = require('../models/ImageModel');

module.exports = {
    async index(req, res) {
        const images = await ImageModel.find(); // ao pegar estaria criando a coluna virtual

        return res.json(images);

    },
    
    async store(req, res) {
        console.log(req.file);
        const { filename } = req.file; // o nome do arquivo da maneira que foi salva

        const image = await ImageModel.create({ image_name: filename });

        return res.json(image);
    },
    

}