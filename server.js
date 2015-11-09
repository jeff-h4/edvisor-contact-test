var connect = require('connect');
var serveStatic = require('serve-static');
var serverPort = 3000;
connect().use(serveStatic(__dirname + '/public')).listen(serverPort);

console.log("Server can be reached at http://localhost:" + serverPort);
