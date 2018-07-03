const User = require("../../model/user")
const Token = require("../../model/token")

module.exports = async (ctx) => {
    let user = ctx.request.body;
    let sUser = await User.findOne({account: user.account})
    if (sUser && sUser.password == Common.utils.md5_twice(user.password)) {
        let token = Common.utils.generate_uuid();
        let tokenModel = new Token({
            id: token,
            userId: sUser.id
        })
        tokenModel.save()
        ctx.body = {
            token: token,
            nickname: sUser.nickname,
            userId: sUser.id
        }
    } else {
        throw new Error('账号密码错误')
    }
}