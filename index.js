const http = require('http');
const {resolve} = require('./rotes')
const {port, hostname, baseUrl} = require('./env')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    resolve(req, res);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${baseUrl}`);
});

