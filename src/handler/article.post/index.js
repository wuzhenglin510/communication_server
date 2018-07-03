const Article = require("../../model/article")

module.exports = async (ctx) => {
    let newArticle = ctx.request.body.articleForm;
    let article;
    let currUserId = await Common.utils.retrieved_user_id(ctx.request.body.token)
    if (newArticle.id) {
        //update
        article = await Article.findOne({id: newArticle.id})
        if (article.userId != currUserId)
            throw new Error(`bad guy: ${currUserId}`)
        article.content = newArticle.content
        article.title = newArticle.title
        article.abstract = newArticle.abstract
        article.purpose = newArticle.purpose
        article.classify = newArticle.classify
        await Article.update({id: article.id}, article)
    } else {
        //insert
        article = newArticle;
        article.createTime = new Date().getTime();
        article.views = 0;
        article.userId = currUserId;
        article.id = Common.utils.generate_uuid();
        let articleModel = new Article(article)
        await articleModel.save();
    }
    ctx.body = {
        articleId: article.id
    }
}