function download() {
   let ua = navigator.userAgent || "";
   let ms = ua.match(/Chrome\/[0-9]+/) || [];
   if (ms && ms.length > 0) {
      let str = ms[0];
      let kv = str.split("/");
      let version = parseInt(kv[1]);
      console.info("kv", kv, version);
      if (version >= 88) {
         if (/Edg/i.test(ua)) {
            location.href = "../downloads/ivideos.v3.1.4.7.crx";
         } else {
            location.href = "../downloads/ivideos.v3.1.4.7.zip";
         }
      } else {
         location.href = "../downloads/ivideos.v2.1.4.7.crx";
      }
   } else {
      alert("No browser support");
   }
}

function install() {
   let ua = navigator.userAgent || "";
   if (/Edg/i.test(ua)) {
      //edge浏览器
      location.href =
         "https://microsoftedge.microsoft.com/addons/detail/ivideos-%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F%E5%99%A8/ekpnmlnjmodhkdikdjjiidnfcbfchiel?hl=" + navigator.language;
   } else if (/Chrome/i.test(ua)) {
      location.href = "https://chrome.google.com/webstore/detail/ivideos-%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F%E5%99%A8/gihpeahidbkanpjajihofclgjoppiika?utm_source=chrome-ntp-icon";
   } else if (/Firefox/i.test(ua)) {
      location.href = "https://addons.mozilla.org/zh-CN/firefox/addon/ivideos-%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F%E5%99%A8/?utm_source=www.ivideos.one&utm_medium=referral";
   }
}
