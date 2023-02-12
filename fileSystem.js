//FileSystem
//file -> create, read, update, delete
let fs = require("fs");
//read
//let buffer = fs.readFileSync("abc.js");
//console.log("bin data "+buffer);
//create
//fs.openSync("abc.txt","w");
// no file --> create file and if exist --> content replace
//create, write
//fs.writeFileSync("abc.txt","I am very happy today😁");
//update
//fs.appendFileSync("abc.txt","what is the reason");

//folder -- create
//fs.mkdirSync("my Directory");
fs.writeFileSync("my Directory/myfile.txt","my content");