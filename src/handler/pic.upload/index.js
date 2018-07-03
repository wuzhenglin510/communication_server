const fs = require('fs')
const path = require('path')

module.exports = async (ctx) => {
    const file = ctx.request.files.image;
    if (file.type == "image/jpeg") {
        const reader = fs.createReadStream(file.path);
        let randomFilename = `${Common.utils.generate_uuid()}.jpg`;
        let filename = path.join(__dirname, '/../../static/upload', randomFilename)
        const stream = fs.createWriteStream(filename);
        reader.pipe(stream);
        ctx.body = path.join('upload', randomFilename)
    } else {
        throw new Error("只允许上传jpeg图片")
    }
} 