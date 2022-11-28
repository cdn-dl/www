(() => {
   let hostname = location.hostname;
   let prefix = hostname == "127.0.0.1" ? "" : `/${hostname.replace(/[\.]/g, "-")}`;
   if (!prefix) return;
   /*    if ("http:" == location.protocol) {
      location.href = "https://" + location.host + location.pathname + location.search + location.hash;
      return;
   } */
   let protocol = "http:" == location.protocol ? "https:" : location.protocol;
   location.href = protocol + "//" + location.host + +prefix + location.pathname + location.search + location.hash;
})();
