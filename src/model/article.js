const mongoose = require("mongoose")

module.exports = mongoose.model('Article', require("./schema/article"))