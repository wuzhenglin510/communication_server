const Article = require("../../model/article")

module.exports = async (ctx) => {
    let params = ctx.request.body;
    let condition = {};
    if (params.classify) condition.classify = params.classify;
    let articles = await Article.find(condition).sort({createTime: -1});
    if (articles)
        ctx.body = articles;
    else
        ctx.body = [];
}