const User = require("../../model/user")

module.exports = async (ctx) => {
    let user = ctx.request.body;
    user.createTime = new Date().getTime();
    user.id = Common.utils.generate_uuid();
    user.password = Common.utils.md5_twice(user.password)
    let userModel = new User(user);
    try {
        await userModel.save();
        ctx.body = '注册成功'
    } catch(err) {
        ctx.body = '账号已注册'
    }
}