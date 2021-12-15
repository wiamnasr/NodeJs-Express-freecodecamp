// taking a look at the os module => built in
const os = require("os");

// info about current user
const user = os.userInfo();

console.log(user);

// method returns system runtime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// methods to get useful data about the operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
