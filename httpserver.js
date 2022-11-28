var http = require("http");
const path = require("path");
const fs = require("fs");
const Koa = require("koa");
const koaStatic = require("koa-static");

let app = new Koa();

app.use(async (ctx, next) => {
   if (/^\/[a-z0-9_-]+$/i.test(ctx.path)) {
      let rurl = ctx.path + "/" + ctx.search;
      ctx.status = 302;
      ctx.set("Location", encodeURI(rurl));
      return;
   }
   console.info("rea", ctx.url, ctx.path);

   await next();
});
app.use(koaStatic("./publish"));

app.listen(8888);
/* 
http
  .createServer(function (request, response) {
    let p = request.url;
    p = p.replace(/\?.*$/, "");
    console.info("url", p);
    p = p == "/" ? "index.html" : p;
    response.writeHead(200, { "Content-Type": "text/plain" });
    let rs = fs.createReadStream(path.join(__dirname, "publish", p));
    rs.on("error", (err) => {
      response.writeHead(404);
    });
    response.writeHead(200);
    rs.pipe(response);
    // 发送响应数据 "Hello World"
    //response.end('Hello World\n');
  })
  .listen(8888);
 */
// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");
