// Modules use common JS and every file is a module (by default)
// encapsulated code (only sharing what we want (minimum))

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
