let hostname = location.hostname;
location.href = location.origin + `/${hostname.replace(/[\.]/g, "-")}` + location.pathname + location.search + location.hash;
