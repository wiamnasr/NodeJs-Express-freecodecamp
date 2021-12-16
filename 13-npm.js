/*
    -   npm - global command, comes with node

    -   npm --version


    ________________________________________________

            >>>  local dependency   <<<
    
    -   use it only in this particular project

    -   npm i <packageName>

    ________________________________________________
    
            >>>  Global dependency   <<<

    -   use it in any project

    -   npm install -g <packageName>

    -   sudo install -g <packageName> (mac/linux)

    ________________________________________________

            >>>  package.json   <<<

    -   manifest file (stores important information about project/package)

    -   manual approach (create package.json in the root, create properties, ... etc)

    -   npm init (step by step, press enter to skip)

    -   npm init -y (everything default)


*/

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hellozz");
