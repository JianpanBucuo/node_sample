let fs = require('fs');

fs.rmdir('css', (err) => {
    if (err) {console.log(err)}
    else {
        console.log('success');
    }
})
//删除了 css文件夹