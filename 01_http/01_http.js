//引入 http模块
let http = require('http');
//创建 http 服务
http.createServer( (req, res) => {
    // 设置 http 头部， 状态码是200， 文件类型是 html， 字符集是 utf-8
   res.writeHead(200, {
       'Content-Type': 'text/html; charset=UTF-8'
   })
   res.write('<h1>Hello nodejs</h1>');
   res.end;
}).listen(3000);