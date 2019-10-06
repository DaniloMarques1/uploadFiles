const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
    image_name: String,
}, {
    toJSON: {
        virtuals: true // indica que estaremos utilizando campos (colunas) virtuais
    }
});

//criacao da coluna virtual para conter a "url" para acessar o arquivo no servidor
ImageSchema.virtual('image_url').get(function() {
    return `http://localhost:5000/files/${this.image_name}` // retorna a rota para o arquivo
});

module.exports = model('Image', ImageSchema);