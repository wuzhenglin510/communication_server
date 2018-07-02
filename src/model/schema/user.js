const mongoose = require("mongoose")

module.exports = new mongoose.Schema({
    id: String,
    account: { type: String, index: { unique: true }},
    password: String,
    nickname: String,
    createTime: Number 
})