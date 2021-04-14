const Koa = require("koa"); //引入koa
const views = require("koa-views");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const parser = require("koa-parser")
const app = new Koa();

app.use(parser());
app.use(views(__dirname + "/views",{
    map:{html: "nunjucks"}
}))

// app.use(async (ctx) => {
//     await ctx.render("index",{title:"hello nunjucks"}) //就是渲染views目录下的index.html文件
// })
router.get("/", async ctx => {
    await ctx.render("index",{title:"首页"});
})
router.get("/video", async ctx => {
    await ctx.render("index",{title:"视频"});
})
router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    await ctx.render("home",{
        username, //属性名和属性值相同可以简写为一个，不简写是username：username
        password
    })
})
router.get("/login", async ctx => {
    let username = ctx.query.username;
    let password = ctx.query.password;
    await ctx.render("home",{
        username, //属性名和属性值相同可以简写为一个，不简写是username：username
        password
    })
})
app.use(router.routes());

app.listen(3000,()=>{
    console.log("启动服务器")
})