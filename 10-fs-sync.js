// file system => interacting with the file system (fs)
// 2 ways: synchronously (blocking), asynchronously (nonblocking)

// SYNCHRONOUSLY
// destructuring directly
const { readFileSync, writeFileSync } = require("fs");
console.log("start");

// will read 2 files an eventually create a new file with writeFileSync
// readFileSync takes 2 params, the path and encoding
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// writeFileSync takes 2 args the file name (if file not there, node will create that file), second is the value I want to pass
// creating new file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
