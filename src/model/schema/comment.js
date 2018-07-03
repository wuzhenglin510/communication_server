const mongoose = require("mongoose")

module.exports = new mongoose.Schema({
    id: String,
    articleId: String,
    comment: String,
    userId: String,
    nickname: String,
    createTime: Number
})