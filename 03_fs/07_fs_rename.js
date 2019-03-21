//重命名
let fs = require('fs');

fs.rename('./03_fs/example.js','./03_fs/rename.js', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('重命名成功');
    }
})
//剪切  将原目录文件， 放置到其他文件夹下