// file system => interacting with the file system (fs)
// 2 ways: synchronously (blocking), asynchronously (nonblocking)

// ASYNCHRONOUSLY
// destructuring directly
const { readFile, writeFile } = require("fs");
console.log("start");

// for the asynchronous method to work, I need to provide a callback (this will be run when the functionality is complete)
// results in a buffer if utf encoding was not provided
// NOTICE THE CALLBACK HELL BELOW!
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next one");
