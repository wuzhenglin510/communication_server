const Article = require("../../model/article")

module.exports = async (ctx) => {
    let article = ctx.request.body.articleForm;
    article.createTime = new Date().getTime();
    article.views = 0;
    article.account = common.utils.retrieved_user_id(ctx.request.body.token)
    article.id = Common.utils.generate_uuid();
    console.log(article)
    console.log(article)
    let articleModel = new Article(article);
    await articleModel.save();
    ctx.body = '发布成功'
}