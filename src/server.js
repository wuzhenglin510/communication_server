const PowerNodeServer = require("node_power_server")
const mongoose = require("mongoose")
const path = require("path")

const server = new PowerNodeServer.Server({
    port: 80,
    handlerDir: path.join(__dirname, "handler"),
    staticRoot: path.join(__dirname, 'static')
})
server.middlewareManage.add("/*", PowerNodeServer.Middleware.CrossDomain(), PowerNodeServer.Middleware.Constant.ExecBefore)
server.middlewareManage.add("/*", async (ctx, next) => {
    if (ctx.request.body.accessCode == '233') {
        await next()
    } else {
        ctx.body = '未授权';
        ctx.status = 403;
    }
})
server.on("init_process", message => console.log(message))
server.on("started",() => console.log(`server start successfully`))

mongoose.connect(`mongodb://127.0.0.1:27017/blog`, function (err) {
    if (err) throw new Error(err)
    console.log('mongo connected');
});
global.Common = require('./common')

server.start()
