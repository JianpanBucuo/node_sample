/*
fs.stat 检测是文件还是目录
fs.mkdir 创建目录
fs.writeFile 创建写入文件
fs.appendFile 追加文件
fs.readFile 读取文件
fs.readdir 读取目录
fs.rename 重命名
fs.rmdir 删除目录
fs.unlink 删除文件
*/

//我们通过 fs.stat来检查 一个读取的是目录还是文件

let fs = require('fs');
fs.stat('./03_fs/index.js', (err, stats) => {
    if (err) { console.log(err); return false; }
     else {
         console.log(stats);
         console.log(`文件:${stats.isFile()}`);
         console.log(`目录:${stats.isDirectory()}`);
         return false;
     }
})