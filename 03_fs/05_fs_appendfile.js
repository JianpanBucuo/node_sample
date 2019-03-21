//追加文件中的内容
let fs = require('fs');
fs.appendFile('./03_fs/example.js','append File', (err) => {
    if (err) {console.log(err);}
    else {
        console.log('追加成功');
    }
})