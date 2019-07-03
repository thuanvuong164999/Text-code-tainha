var http = require('http')
var fs = require('fs')
// khai báo module sử dụng cho server máy chủ

http.createServer(function(req,res){
    // create file using appendFile() method
    // fs.appendFile() là pp gắn thêm nội dung vào một tệp, nếu tệp không tồn tại thì sẽ được tạo
    fs.appendFile('newfile1.txt', 'Hello World', function(err){
        if (err) throw err //?
        console.log('Saved1!')
    });

    // create new file, empty file using open() method
    // (?) mở các file có văn bản 'w' có sẳn, nếu không tồn tại file, thì sẽ tạo ra một file trống
    fs.open('newfile2.txt', 'w', function(err, file){
        if (err) throw err
        console.log('Saved2!')
    });

    // create new file using writeFile() method
    // (?) thay thế văn bản 'Hello My Friends' cho nội dung trong file 'newfile3.txt'
    // nếu file không tồn tại thì sẽ tạo ra file mới có nội dung yêu cầu
    fs.writeFile('newfile3.txt', 'Hello My Friends', function(err){
        if (err) throw err
        console.log('Saved3!')
    })
}).listen(7000);
