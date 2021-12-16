// read file setup
// What would be a better solution if we had multiple actions to perform (reading and writing several files for example)

// >>>>>>>>>>>>>>>>>>>>> Much more readable approach <<<<<<<<<<<<<<<<<<<<

const { readFile, writeFile } = require("fs").promises;

// >>>>>>>>>    // if we add .promises after the import of the fs module, we can omit this:
// util module
// const util = require("util");

// // util module has a method by the name "promisify"
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// With the asynchronous approach, we wrap the logic in try/catch blocks so if something goes wrong, we have some control over it
const start = async () => {
  try {
    //     const first = await readFilePromise("./content/first.txt", "utf-8");
    // if we add .promises after the import of the fs module, we can directly do this:
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    //     writing the file
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

// invoking my function
start();

//  >>>>>>>>>>>>>>>>>>>>>>>> Side Note to understand how promises work

// A less effective solution would be turning this into a promise, then eventually setup async await (will do promise first to understand what's happening behind the scenes)
// getText takes in the path arg, because we want to read two files in this example and eventually write one as well
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// This returns a promise that we can then chain with then and catch error
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
