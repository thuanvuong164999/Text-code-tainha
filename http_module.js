var http = require('http')
// khai báo khu chứa http, chứa module http có sẳn trong node.js

// tạo server wed
http.createServer(function (req, res) {
    // => client (front_end) muốn hiện trên server web
    res.writeHead(200, {'Content-Type': 'text/html'});
     // tạo httpHeader, 200 (tất cả đều ổn) là mã trạng thái, số thứ 2 là đối tượng chứa header reponse
    res.write(''); // viết một reponse (phản hồi) vào client
    
    // http có 1 req thể hiện yêu cầu của máy khách, dạng http.IncomeMessage
    res.write(req.url); //dối tượng req chứa một phần tử url
    // chảy node http_module.js để bít kết quả 

    res.end(); // kết thúc reponse
}).listen(7000); // server web được đưa vào port 7000, tức localhost:7000