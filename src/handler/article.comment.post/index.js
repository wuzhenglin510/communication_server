const Comment = require("../../model/comment")
const User = require("../../model/user")

module.exports = async (ctx) => {
    let comment = ctx.request.body.comment;
    if (!comment.articleId) throw new Error(`article not exist`)
    let currUserId = await Common.utils.retrieved_user_id(ctx.request.body.token)
    if (currUserId) comment.nickname = (await User.findOne({id: currUserId})).nickname
    comment.userId = currUserId;
    comment.id = Common.utils.generate_uuid();
    comment.createTime = new Date().getTime();
    let model = new Comment(comment)
    await model.save()
    ctx.body = '回复成功' 
}