const mixpanel = require("mixpanel-browser");
mixpanel.init("ee29492fef02c70826725f3194b2df57", { debug: false, ip: true, ignore_dnt: true });

//const env = process["env0"] || {};
class Stats {
   constructor() {
      let _this = this;
      this._ip = globalThis.localStorage?.getItem("ip") || "";
      globalThis.addEventListener("load", () => {
         //mixpanel.identify();
         this.open();
      });
   }
   set ip(ip) {
      this._ip = ip;
      globalThis.localStorage?.setItem("ip", ip);
   }
   get ip() {
      return this._ip;
   }

   open() {
      this.track("open", { url: location.href, title: document.title });
   }

   track(name, data) {
      mixpanel.track(name, { ...data, t: Date.now(), language: navigator.language, ip: this.ip });
   }
}
const status = new Stats();

export default status;
