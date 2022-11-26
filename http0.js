var http = require("http");
const path = require("path");
const fs = require("fs");

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

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");
