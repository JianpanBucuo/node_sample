/*
在这里， 我们通过 http模块，url模块， path模块，fs模块创建一个web 服务器
*/ 
let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
 
    let pathName = req.url;
    if (pathName == '/') {
        pathName = 'index.html';
    }
    if (pathName != '/favicon.ico') {
        fs.readFile('./04_webservice/'+ pathName, (err, data) => {
            if (err) {
                 console.log('404 Not Found');
                 fs.readFile('./04_webservice/404.html', (err, data) => {
                     if (err) {console.log(err);}
                     else {
                         res.writeHead(200, {
                             'Content-Type':'text/html; charset=utf-8'
                         });
                         res.write(data);
                         res.end();
                     }
                 })
            } else {
                    fs.readFile('./04_webservice/index.html', (err , data) => {
                         if (err) { console.log(err); }
                         else {
                             res.writeHead(200, {
                                 'Content-Type': 'text/html; charset=utf-8'
                             });
                             res.write(data);
                             res.end();                             
                         }
                    })              
            }
        })
    }

}).listen(8000);