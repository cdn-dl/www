const FileManagerPlugin = require("filemanager-webpack-plugin"); //压缩zip
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const nunjuckEnv = require("./nunjucks");
const CopyPlugin = require("copy-webpack-plugin");
const config = require("./webpack.config.common");
//const isProduction = process.env.NODE_ENV == "production";
const isProduction = process.env.NODE_ENV != "development";
const path = require("path");
const fs = require("fs");
const moduleName = "www-ivideos-one";
const baseDir = path.resolve(`./src/${moduleName}`);
const outDir = path.resolve(`./publish/${moduleName}`);
const ivideosLocales = require(`${baseDir}/__locales`);
const languages = Object.keys(ivideosLocales);
config.output.path = outDir;

console.info("out", outDir, path.join(outDir, "index.x.html"));
console.info("env", baseDir, isProduction);

const templates = [];
for (let lang of languages) {
   let map = ivideosLocales[lang];
   tree(baseDir, (name) => {
      if (name.endsWith("index.x.html")) return;
      let to = name.replace(baseDir, "");
      to = to.replace(/\.njk$/, ".html");
      let includeLanguage = new RegExp(`^\/(${languages.join("|")})`, "i").test(to)
      if (!includeLanguage) to = `${lang}/` + to;
      //console.info("to", to);
      templates.push({
         from: name, //path.join(baseDir, "en/index.html"),
         to: to,
         context: {
            $t: map,
            languages: languages,
         },
      });
   });
}
function tree(dir, callback) {
   let stat = fs.statSync(dir);
   //console.info("dir", dir, stat.isDirectory());
   if (stat.isDirectory()) {
      let list = fs.readdirSync(dir); //.filter(v=>/\.(html|htm|njk)$/i.test(v));
      for (let name of list) {
         if (/^__/i.test(name)) continue;
         tree(path.join(dir, name), callback);
      }
   } else {
      if (/\.(html|htm|njk)$/i.test(dir)) {
         callback(dir);
      }
   }
}
config.entry = {
   index: {
      import: path.join(baseDir, "index.js"),
      filename: "index.js",
      library: {
         // all options under `output.library` can be used here
         name: "index",
         type: "var",
         //umdNamedDefine: false,
      },
   },
};

config.plugins.push(
   new NunjucksWebpackPlugin({
      templates: templates,
      configure: nunjuckEnv,
   }),
   new CopyPlugin({
      patterns: [
         {
            from: path.join(baseDir),
            to: "", //
            filter: (v) => !/\/__/i.test(v) && /\.(json|js|css|jpg|jpeg|png|gif|ico|md|zip|crx)/i.test(v),
         },
      ],
   }),
   new FileManagerPlugin({
      events: {
         onEnd: {
            //delete: ["dist/www.ivideos.one.zip"],
            copy: [{ source: path.join(baseDir, "index.x.html"), destination: path.join(outDir, "index.html") }],
            //copy: [{ source: "dist-ext/chrome", destination: "dist-ext/edge" }],
            //move: [{ source: "dist-ext/content-script-no.js", destination: "dist-ext/chrome-no/js/content-script.js" }],
            //mkdir: ["/path/to/directory/", "/another/directory/"],
            //archive: [{ source: "publish/www-ivideos-one", destination: "dist/www.ivideos.one.zip" }],
         },
      },
   }),
);

module.exports = () => {
   if (isProduction) {
      config.mode = "production";
   } else {
      config.mode = "development";
   }
   return config;
};
