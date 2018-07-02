const mongoose = require("mongoose")

module.exports = new mongoose.Schema({
    id: String,
    classify: String,
    purpose: String,
    title: String,
    abstract: String,
    content: String,
    views: Number,
    createTime: Number,
    userId: String
})