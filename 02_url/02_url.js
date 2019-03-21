let url = require('url');
let http = require('http');

http.createServer((req, res) => {
  if (req.url != '/favicon.ico') {
    //url.parse() 分析 url，转换为对象
    //url.format() 将对象转换为 url  
    let result = url.parse(req.url, true);
      console.log(result);
  }    
//   设置响应头
  res.writeHead(200, {
      'Content-Type': 'text-html; charset=utf-8'
  })
// 返回
  res.write('<h1>node</h1>')
  res.end();
// 返回结束
}).listen(3000);