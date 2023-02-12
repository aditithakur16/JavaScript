let cp = require("child_process");
console.log("Trying to open Calculator");
cp.execSync("Calc");
//cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("Opened Calculator✨");
let output = cp.execSync("node abc.js");
console.log("output is 🔥"+ output);