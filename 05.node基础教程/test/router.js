const Koa = require("koa");//引入koa构造函数
const router = require("koa-router")();//引入并且直接执行
const static = require("koa-static");
const app = new Koa();//创建应用

app.use(static(__dirname + "/public"));


router.get("/", async (ctx) =>{
    ctx.body = `
        <h1>标题</h1>
        <p>这是一个段落</p>
        <img src="img/1.png">
    `;
})

router.get("/video", async ctx => {
    ctx.body = "video page";
})

app.use(router.routes()); //在koa项目中引入router

app.listen(3000, ()=>{
    console.log("服务器启动")
})