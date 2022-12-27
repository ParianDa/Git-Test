//my first node js app

const http = require('http');

const routes1 = require('./routes.js');


const server = http.createServer(routes1);
console.log("Hello there toma");
console.log("working on git branch");
// console.log(routes.someText);

server.listen(4001);