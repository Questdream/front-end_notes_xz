//引入第三方模块
const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const views = require("koa-views");
const parser = require("koa-parser");
const static = require("koa-static")
//创建应用
const app = new Koa();
//使用绑定相关模块
app.use(parser());
app.use(static(__dirname + "/public"));
app.use(views(__dirname + "/views", {
    map: {html: "nunjucks"}
}));


// 数据
let dataList = ["香蕉","苹果","鸭梨"];

router.get("/", async ctx => {
    await ctx.render("index1")
})

// get 查看
router.get("/fruits", ctx => {
    ctx.body = dataList;
})

//post 添加
router.post("/fruits", ctx => {
    let fruit = ctx.request.body.fruit;//form表单中name属性的fruit值这个input元素的输入框值
    dataList.push(fruit);
    ctx.body = dataList;
})

// put 修改
router.put("/fruits/:id", ctx => {//路由传参 /:id  --> ctx.params.id
    let id = ctx.params.id;//1
    let fruit = ctx.request.body.fruit;//草莓
    dataList.splice(id,1,fruit);//splice(要删除的元素索引值,删除几个元素,将删除元素替换成xx)
    ctx.body = dataList;
})

// delete 删除
router.delete("/fruits/:id", ctx => {
    let id =ctx.params.id;
    dataList.splice(id,1);
    ctx.body = dataList;
})

app.use(router.routes());

app.listen("3000", () => {
    console.log("启动服务器")
})