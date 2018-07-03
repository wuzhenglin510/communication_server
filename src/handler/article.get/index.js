const Article = require("../../model/article")

module.exports = async (ctx) => {
    let articleId = ctx.request.body.articleId;
    let article = await Article.findOneAndUpdate({id: articleId}, { $inc: { views: 1 }});
    if (article) 
        ctx.body = article;
    else
        throw new Error(`article not exist ${article}`)
}