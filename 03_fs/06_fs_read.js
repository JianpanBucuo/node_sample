// fs.readFile 读取文件
// fs.readdir 读取目录

let fs = require('fs');

//读取文件
fs.readFile('./03_fs/example.js', (err, data) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log('读取文件成功');
        console.log(data);
    }
})

//读取目录
fs.readdir('node_modules', (err,data) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log('读取目录成功');
        console.log(data); //目录下的文件
    }
})