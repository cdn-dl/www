import Koa from "koa";
import koaStatic from "koa-static";
import path from "path";
let isDev = process.env.NODE_ENV == "development";
let wwwPath = path.resolve("publish"); // "../publish";
console.info("wwwPath", wwwPath);
let app = new Koa();

app.use(async (ctx, next) => {
   let host: string = ctx.get("host") || "";
   let url = "/" + host.replace(/[\.]/g, "-") + ctx.url; //;host.replace(/[\.]/g, "-");
   ctx.url = url;
   ctx.path = url;
   console.info("req", url);
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

app.listen(80);
