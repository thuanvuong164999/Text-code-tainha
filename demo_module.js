var http = require('http')
// khai báo một chỗ chứa, chứa module tich hop http (có sẳn trong node.js)
var dt = require('./nodejs_module')
// khai báo một chỗ chứa module bản thân tạo

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    // dt.myDateTime() : đưa vào ct bằng cách <chỗ chứa>.<module()>, trả ra Date()
    res.end('Hello World!');
}).listen(7000);