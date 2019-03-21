let http = require('http');
let tools = require('./03_tool-add');
let tools2 =require('03_tool-multiply');
let tools3 = require('jsliang-module');
http.createServer((req, res) => {
     res.writeHead(200, {
         'Content-Type':'text/html; charset=UTF-8'
     });
     if (req.url != '/favicon.ico') {
            res.write('<h1>Hello nodejs</h1>');
            console.log(tools.add(1,2,3));
            console.log(tools2.multiply(1,2,3));
            console.log(tools3.multiply(1,2,3,45));
            res.end();         
     }

}).listen(3000);