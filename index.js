/******************** */
var MESSAGGIO_DA_MODIFICARE = "Hello world"
/***************** */




const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: MESSAGGIO_DA_MODIFICARE, timestamp: new Date() }));
});

server.listen(3000);

console.log("The app is listening on port 3000")
