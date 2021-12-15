const path = require("path");

// Separator property, that returns platform specific separators
console.log(path.sep);

// The join method that joins a sequence of path segments using that platform specific separator as delimiter
// The second thing it does is returning a normalized resulting path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// The basename method( e.g creating a file path, basename can help access only the last portion of it for example)
const base = path.basename(filePath);
console.log(base);

// path.resolve returns an absolute path
// accepts a sequence of paths (or path segments) and resolves it into an absolute path
// this is very important, because our application will run in different environments, so the path to some kind of resource will differ from machine to another
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
