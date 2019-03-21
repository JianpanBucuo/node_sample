// 我们尝试 使用 mkdir 创建目录

let fs = require('fs');
/* 
 path 将创建的目录
 mode 模式（读写权限）
 callback 回调 传递异常参数 err
*/

fs.mkdir('css', (err) => {
    if (err) { console.log(err); }
    else {
        console.log('success');
    }
})