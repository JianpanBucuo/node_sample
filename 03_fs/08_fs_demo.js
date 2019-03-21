/*
1.判断服务器上有没有 upload目录，没有就创建这个目录
2.找出 node_modules目录下的所有文件，然后打印出来
*/

let fs = require('fs');
fs.stat('03_fs/upload', (err, stats) => {
    if (err) {
        fs.mkdir('03_fs/upload', (err,stat) => {
            if (err) {console.log(err);} 
            else {
                console.log('创建upload目录成功');
            }
        })
    } 
    else {
       console.log('upload文件夹以创建');
       console.log(`upload ${stats.isDirectory()}`);
    }
})

//读取目录下的文件

fs.readdir('node_modules', (err, files) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log(files);
        let filesArr = [];
        (function getFile (i) {
          if (i == files.length) {
             console.log('目录：');
             console.log(filesArr);   
             return false;
            }  
          fs.stat('node_modules/' + files[i], (err, stats) => {
              if (stats.isDirectory()) {
                  filesArr.push(files[i]);
              }
              getFile(i + 1);
          })  
        })(0)
    }
})

