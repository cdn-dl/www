async function fetchImage(url) {
  return (
    fetch(url)
      // Retrieve its body as ReadableStream
      .then((response) => response.arrayBuffer())
  );
}
class ReaderStreamFace {
  stream;
  queue = [];
  isEnd = false;
  interval;
  isUrl = false;
  url = "";
  size=0;
  constructor() {
    let _this = this;
    let queue = this.queue;
    let stream = new ReadableStream(
      {
        start(controller) {
          console.info("=====start", queue);
          let interval = setInterval(() => {
            let value = queue[0];
            console.info("vvx",queue, value);
            if (value != undefined) {
                queue.splice(0, 1);
              console.info("write===", value, value.length, value.size, value.byteLength);
              _this.size += value.byteLength;
              controller.enqueue(value);
            }
            if (_this.isEnd) {
              clearInterval(interval);
              controller.close();
              console.info("end===", controller);
               _this.createURL();

              // _this.url();
            }
          }, 1000);
        },

        cancel() {},
      },
      {
        //highWaterMark: 3,
        size: () => {
            console.info("size==", _this.size);
            return _this.size;
        },
      }
    );
    this.stream = stream;
  }
  write(value) {
    this.queue.push(value);
  }
  end() {
    this.isEnd = true;
  }
  async createURL(callback) {
    if (this.url) return this.url;
    return new Promise((resolve) => {
      const reader = this.stream.getReader();
      reader
        .read()
        .then(({ done, value }) => {
            console.info("===done", done, value);
            return new Response(value, {headers: {"content-type": "image/jpg"}});
        })
        .then((response) => {
            console.info("response", response)
            return response.blob();
        })
        .then((blob) => {
            console.info("blob", blob);
            return URL.createObjectURL(blob);
        })
        .then((url) => {
          this.url = url;
          console.log("url", url, this.url);
            //location.href = this.url;

          callback && callback(url);
          resolve(url);
          return url;
        })
        .catch((err) => console.error(err));
    });
  }
}

(async () => {
  // Fetch the original image
  let readableStream = new ReaderStreamFace();
  let s1 = await fetchImage(
    "https://img.pddpic.com/gaudit-image/2022-11-26/e911074f701495572fe9dd06b574909b.jpeg"
  );
  console.info("s1", s1);
  //await readableStream.createURL();
  readableStream.write(s1);
  //await readableStream.createURL();
  let s2 = await fetchImage(
    "https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/46866/29/22253/55078/637ed37cE49d279be/67ce67407dc18e64.jpg"
  );
  console.info("s2", s2);
  readableStream.write(s2);
  readableStream.end();

})();











const stream = new ReadableStream(
    {
      start(controller) {},
      pull(controller) {},
      cancel() {},
      type,
      autoAllocateChunkSize,
    },
    {
      highWaterMark: 3,
      size: () => 1,
    }
  );
  fetch(
    "https://img.pddpic.com/gaudit-image/2022-11-26/e911074f701495572fe9dd06b574909b.jpeg"
  )
    // Retrieve its body as ReadableStream
    .then((response) => {
      const reader = response.body.getReader();
      let readerStream = new ReadableStream({
        start(controller) {
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                controller.close();
                return;
              }
              console.info("value", value);
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
          return pump();
        },
      });
      const reader0 = readerStream.getReader();
  
      reader0
        .read()
        .then((stream) => new Response(stream))
        .then((response) => response.blob())
        .then((blob) => URL.createObjectURL(blob))
        .then((url) => {
          console.log("url", url);
          return url;
        })
        .catch((err) => console.error(err));
      return readerStream;
    });
  