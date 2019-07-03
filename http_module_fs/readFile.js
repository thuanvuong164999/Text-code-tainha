var http = require('http')
var fs = require('fs')
// khai báo module sử dụng cho server máy chủ

http.createServer(function(req,res){
    fs.readFile('./demo_serverfile.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data);
        // file được truyền vào data và được trả lại trên http

        res.end();
    });
}).listen(7000);