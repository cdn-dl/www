((g) => {
   const Locales = g.Locales;
   console.info("lo", Locales, g);
   g.$t = (key) => {
      let lang = navigator.language;
   };
})(globalThis);
