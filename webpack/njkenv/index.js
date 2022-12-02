const nunjucks = require("nunjucks");

module.exports = (options) => {
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

   env.addGlobal("$static", (file, path) => {
      let relativePath = path.replace(options.baseDir, "");
      relativePath = relativePath.replace(/\\/g, "/").replace(/(^\/+)|(\/+$)/, "");
      let seqs = relativePath.split("/").filter((v) => !!v);
      seqs = seqs.slice(0, seqs.length - 1);
      let ps = seqs.map((v) => "../").join("");
      console.info("url0", file, seqs, "==>", ps + file);
      return ps + file; //.replace(url, "");
   });
   return env;
};
