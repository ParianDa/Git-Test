//setting up a node js driven server on port 3000
const http = require('http');

const routes = require('./routes.js');

const createServer = http.createServer(routes);

createServer.listen(3000);