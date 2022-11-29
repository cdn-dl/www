(() => {
   let langs = new Set(["en", "zh-CN"]);
   let lang = langs.has(navigator.language) ? navigator.language : "en";
   lang = lang + "/";
   let nurl = location.origin + location.pathname + lang + location.search + location.hash;
   location.href = nurl;
})();
