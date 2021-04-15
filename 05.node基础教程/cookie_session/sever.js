const Koa = require("koa"); //创建服务器应用
const router = require("koa-router")();//实现路由操作
const views = require("koa-views");//绑定koa和相应的模板引擎。
const nunjucks = require("nunjucks");//需要使用的模板引擎
const session = require("koa-session");

const app = new Koa(); //创建应用

app.keys = ["123456"]

app.use(session({
    maxAge:3000*10
}, app ))

app.use(views(__dirname+"/views", {
    map:{html:"nunjucks"}
}))   //绑定模板引擎

router.get("/", async ctx => {
    // cookie是以明值对的方式记录在客户端（浏览器）
    ctx.cookies.set("user","admin")//即第一个set的第一个参数为属性，第二个参数为属性值，第三个参数为一个对象表示对这个cookie的进一步设置，比如过期时间
    ctx.body = "cookie"
})

router.get("/test", async ctx => {
    // let user = ctx.cookies.get("user");
    // ctx.body = user
    let count = ctx.cookies.get("count");//获取cookie的属性为count的属性值
    if(count>0){ //判断有无cookie
        ++count;
        ctx.cookies.set("count",count,{
            maxAge:2000 //设置cookie过期时间为2秒
        });
    }else{
        count = 1;
        ctx.cookies.set("count",1);
    }
    ctx.body = count
})
// 设置session
router.get("/session", async ctx => {
    ctx.session.user = "admin";
    ctx.body = "set session"
})

// 获取session
router.get("/session_test", async ctx => {
    // let user = ctx.session.user;
    // ctx.body = user;
    if(ctx.session.count>0){//是否有session
        ++ctx.session.count;
    }else{
        ctx.session.count = 1//设置为1，表示第一次请求
    }
    ctx.body = ctx.session.count
})

app.use(router.routes());//绑定应用和路由

app.listen("3000", () => {
    console.log("服务器启动")
})