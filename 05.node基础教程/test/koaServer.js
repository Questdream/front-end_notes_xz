const Koa = require("koa"); // 引入Koa构造函数
const app = new Koa(); //创建应用对象

//use方法内的回调函数会在请求与响应之间执行，这个函数是一个中间件
app.use(async (ctx,next) =>{
    ctx.body = "hello world koa"
    await next();
})
app.use(async (ctx,next) => {
    console.log("我是一个中间件")
})

app.listen(3000,()=>{//设置端口
    console.log("your koa server is running")
})