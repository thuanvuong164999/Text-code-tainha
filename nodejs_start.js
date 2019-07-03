var http = require('http')
// khai báo phần mềm http (có sẳn trong node.js)

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(7000);