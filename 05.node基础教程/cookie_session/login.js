const Koa = require("koa"); //创建服务器应用
const router = require("koa-router")();//实现路由操作
const views = require("koa-views");//绑定koa和相应的模板引擎。
const nunjucks = require("nunjucks");//需要使用的模板引擎
const session = require("koa-session");
const parser = require("koa-parser");

const app = new Koa(); //创建应用

app.keys = ["123456"]

app.use(parser());
app.use(session({
    maxAge:3000*10
}, app ))

app.use(views(__dirname+"/views", {
    map:{html:"nunjucks"}
}))   //绑定模板引擎
//首页：任何人都能访问
router.get("/", async ctx => {
  await ctx.render("home.html");
})
//登录页：任何人都能访问 表单
router.get("/login", async ctx => {
    await ctx.render("login.html");
})
router.post("/login", async ctx => {
    let username = ctx.request.body.username;//post方法获取表单元素的方法
    let password = ctx.request.body.password;
    if(username === "lxx" && password ==="123"){
        ctx.session.user = "lxx";
        ctx.redirect("/content");//重定向
    }else{
        ctx.redirect("/");
    }
})

//内容页：只有登录成功才能访问
router.get("/content", async ctx => {
    if(ctx.session.user){
        await ctx.render("content.html");
    }else{
        ctx.redirect("/")
    } 
})
router.get("/logout", async ctx => {
    ctx.session.user = "";
    ctx.redirect("/")
})


app.use(router.routes());//绑定应用和路由

app.listen("3000", () => {
    console.log("服务器启动")
})