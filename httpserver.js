var http = require("http");
const path = require("path");
const fs = require("fs");
const Koa = require("koa");
const koaStatic = require("koa-static");

let args = {};
process.argv.slice(2).forEach((vv) => {
   vv = vv.replace(/^([^a-z]+)/i, "");
   let kv = vv.split("=");
   //return {name: kv[0], value: kv[1]};
   args[kv[0]] = kv[1];
});
console.info("args", args, process.env.NODE_ENV);
let isDev = process.env.NODE_ENV == "development";
let wwwPath = isDev ? "./src" : "./publish";
let app = new Koa();

app.use(async (ctx, next) => {
   console.info("req", ctx.path);
   if (/^\/[a-z0-9_-]+$/i.test(ctx.path)) {
      let rurl = ctx.path + "/" + ctx.search;
      ctx.status = 302;
      ctx.set("Location", encodeURI(rurl));
      return;
   }
/*    let file = path.join(__dirname, "src", ctx.path);
   console.info("=======", file);
   if (!/\.([a-z0-9]+)$/i.test(ctx.path)) {
   }

   if (/\.(html|htm|njk)$/i.test(ctx.path)) {
      nunjucks.render(file);
      return;
   } */

   await next();
});
app.use(koaStatic(wwwPath));

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
