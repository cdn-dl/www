(() => {
   let hostname = location.hostname;
   let prefix = hostname == "127.0.0.1" ? "" : `/${hostname.replace(/[\.]/g, "-")}`;
   let protocol = "http:" == location.protocol ? "https:" : location.protocol;
   let nurl = protocol + "//" + location.host + prefix + location.pathname + location.search + location.hash;
   if (!prefix) return;
   /*    if ("http:" == location.protocol) {
      location.href = "https://" + location.host + location.pathname + location.search + location.hash;
      return;
   } */
   console.info("redirect", nurl);
   location.href = nurl;
})();
