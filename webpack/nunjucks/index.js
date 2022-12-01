const nunjucks = require("nunjucks");

var env = nunjucks.configure("", {
   throwOnUndefined: false,
   trimBlocks: true,
   lstripBlocks: true,
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
