const Comment = require("../../model/comment")

module.exports = async (ctx) => {
    let articleId = ctx.request.body.articleId;
    if (!articleId) throw new Error(`article not exist`)
    let comments = await Comment.find({articleId}).sort({createTime: -1});
    ctx.body = comments 
}