const mongoose = require("mongoose")

module.exports = mongoose.model('Comment', require("./schema/comment"))