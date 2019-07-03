var http = require('http')
var url = require('url')
// module phân tách chuổi truy vấn có thể đọc được

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    // chuỗi truy vấn trở thành : localhost:7000/&year=<>&month=<>
    // vd localhost:7000/&year=2019&month=9
    // chạy node http_module_url để bít kết quả
    
    res.end(txt);
}).listen(7000);