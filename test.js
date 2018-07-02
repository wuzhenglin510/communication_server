
const Koa = require("koa")
const KoaRouter = require("koa-router")
const KoaBody = require("koa-body")
const api9081Server = new Koa()
let router = new KoaRouter()
router.all("/*", (ctx) => {
    console.log("here /*")
    console.log(ctx.request.body)
})

api9081Server.use(KoaBody())
api9081Server.use(router.routes())
api9081Server.listen(9081)
console.log("启动")