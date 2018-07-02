const mongoose = require("mongoose")

module.exports = mongoose.model('Token', require("./schema/token"))