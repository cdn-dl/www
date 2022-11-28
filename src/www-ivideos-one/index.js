(() => {
   let lang = navigator.language + "/";
   let nurl = location.origin + location.pathname + lang + location.search + location.hash;
   setTimeout(() => {
      location.href = nurl;
   }, 1000);
})();
