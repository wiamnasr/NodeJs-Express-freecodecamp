//  >>>>>>>>>>>>>>STREAMS

// createReadStream method
const { createReadStream } = require("fs");

/*
    -   Default Buffer size 64kb, but can be controlled by passing in the object when setting up createReadStream as we're doing down, by passing in first the path (big.txt) then the options object with the property we are looking for, here its highWaterMark that controls the size of the buffer

    -   last buffer - remainder

    -   highWaterMark - control size

*/

// this will result in 2 console.log() s, one for 90kb and the second, is the remaider
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  //   encoding: "utf-8",
});

// const stream = createReadStream('./content/big.txt', { highWaterMark : 90000 })

// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// once we created the stream instance, we now have access to the events
// here we are reading data in chunks (64kb of data size in the buffer by default)
stream.on("data", (result) => {
  console.log(result);
});

// error event
stream.on("error", (err) => {
  console.log(err);
});
