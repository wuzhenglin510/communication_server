const uuid = require("uuid/v4")
const md5 = require("md5")
const Token = require("../../model/token")


module.exports = {
    generate_uuid: () => {
        return uuid().replace(/-/g, '')
    },
    md5_twice: (input) => {
        return md5(md5(input))
    },
    retrieved_user_id: (token) => {
        let tokenI = Token.findById(token);
        return tokenI && tokenI.userId || ''
    }
}