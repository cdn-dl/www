(() => {
  class Api {
    async getList() {
      let list = await fetch("https://w.iee.one/api/mds/list").then(
        async (res) => {
          if (res.status != 200) return [];
          let res0 = await res.json();
          let data = res0.data || {};
          return data.list || [];
        }
      );
      console.info("list", list);
      return list;
    }
  }
  let api = new Api();

  async function show() {
    let list = await api.getList();
    let html = [];
    list.forEach((item) => {
      if (item.type == "direct") {
        html.push(`<div class="product-item">
                <a href="${item.url}" target="_blank">
                <div class="product-single">
                    <div class="product-img">
                        <img src="${item.images[0]}" alt="Product Image"/>
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <h2><a href="">${item.title}</a></h2>
                        </div>
                        <div class="product-ratting">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                        </div>
      
                    </div>
                </div>
                </a>
            </div>`);
      }
    });
    let mw = document.querySelector("#product-direct");
    console.info("mw", mw, html);
    if (mw) {
      mw.innerHTML += html.join("");
    }
  }
  function showGoogle() {
    if (/^([0-9]{1,3}\.)/i.test(location.hostname)) return;
    let script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2208954604036695";
    script.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(script);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  show();
  showGoogle();
})();
