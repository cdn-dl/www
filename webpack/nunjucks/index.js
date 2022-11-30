const nunjucks = require("nunjucks");

var env = nunjucks.configure("", {
   autoescape: true,
   trimBlocks: true,
   noCache: false,
   tags: {
      blockStart: "{%",
      blockEnd: "%}",
      variableStart: "{$",
      variableEnd: "$}",
      commentStart: "{#",
      commentEnd: "#}",
   }, 
});

env.addGlobal("$static", (url)=>{
    return //.replace(url, "");
});

module.exports = env;
