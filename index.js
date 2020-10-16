const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{message:"Hello world"}');
});

server.listen(3000);

console.log("The app is listening on port 3000")
