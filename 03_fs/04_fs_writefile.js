let fs = require('fs');

fs.writeFile('./03_fs/example.js','Hello jsliang', (err) => {
    if (err) { console.log(err); }
    else {
        console.log('写入成功');
    }
})
//这样的写入，是清空文件中的所有数据，然后添加 js liang，存在即覆盖， 不存在即创建
