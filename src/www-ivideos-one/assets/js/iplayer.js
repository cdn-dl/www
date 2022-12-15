function getQuery() {
    let search = location
        .search
        .replace(/^\?/, "")
        .split("&");
    let query = {};
    for (let line of search) {
        let kv = line.split("=");
        query[kv[0]] = kv[1];
    }
    return query;
}
function isMobile() {
    return "onorientationchange" in window;
}
function setHeight() {
    let ua = navigator.userAgent;
    let isMobile = /iphone|android/i.test(ua);
    let eleVideo = document.querySelector("video");
    //let eldMds = document.querySelector(".mds");
    let dif = 0;
    let height = window.outerHeight - dif;
    let bi = window.outerWidth / window.outerHeight;
    // eleWrap.style.height = height + "px"; eldMds.style.height = height + "px";
    //eldMds.style.display = "inline-block";
    if (window.orientation != undefined) {
        console.info("orientation", window.orientation);
        if (window.orientation == 180 || window.orientation == 0) { // alert("竖屏状态！")
        }
        if (window.orientation == 90 || window.orientation == -90) { // alert("横屏状态！") eleVideo.style.height = height + "px";
        }
    } else {
        if (bi >= 1) {
            // eleVideo.style.height = height + "px"; eleWrap.style.height = height + "px";
            //
        } else { // eleVideo.style.height = height + "px";
        }
    }
}

window.addEventListener("load", setHeight, false);
window.addEventListener("orientationchange", setHeight, false);
jQuery(($) => {
    setHeight();
    async function play(url) {
        if (!/^https?:/i.test(url)) return;
        if (window.playerx) window.playerx.destroy();
        let m3u8Text = sessionStorage.getItem(url);
        if (!m3u8Text) m3u8Text = await ivideos.fetch(url).then(res=> res.text());
        if (!m3u8Text) return;
        m3u8Text = ivideos.parse.formatM3u8(url, m3u8Text);
        sessionStorage.setItem(url, m3u8Text);
        let blob = new Blob([Buffer.from(m3u8Text)], {type: "application/vnd.apple.mpegurl"});
        url = URL.createObjectURL(blob);
        let video = document.querySelector("video");
        console.info("play url", url);
        // https://iqiyi.sd-play.com/20220423/BtSE5SYf/1200kb/hls/index.m3u8
        const source = url; // "https://bitdash-a.akamaihd.net/content/sintel/hls/video/250kbit.m3u8";
        const player = new Plyr(video, {
            autoplay: true,
            seekTime: 5,
            // duration: 120,
            invertTime: false,
            /* ads: {
enabled: true, publisherId: '', tagUrl: ''
}, */
            captions: {
                active: true,
                update: true,
                language: "en"
            }
        });
        if (!Hls.isSupported()) {
            video.src = source;
        } else { // For more Hls.js options, see https://github.com/dailymotion/hls.js
            const hls = new Hls();
            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {});
            // Handle changing captions
            player.on("languagechange", () => { // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
                setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
            });
            player.on("ready", () => {
                console.info("=========ready");
                player.play().catch((err) => console.info("play error", err));
            });
        }
        window.playerx = player;
        return player;
    }
    let query = getQuery();
    let id = decodeURIComponent(query.id);
    // "https://v.gsuus.com/play/NbWqmN4e/index.m3u8"
    id && play(id);
});
setHeight();