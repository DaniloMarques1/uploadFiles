const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const fileExt = path.extname(file.originalname);
            const fileName = path.basename(file.originalname, fileExt);
            callback(null, `${fileName}-${Date.now()}${fileExt}`);
        }
    })
}