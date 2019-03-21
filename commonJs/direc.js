/*
commonjs 为 js的表现制定规范， 因为 js没有模块系统， 标准库较少，缺乏包管理工具
所以 commonjs 应运而生，它希望 js 能够在 任何地方运行

commonjs 的应用
        01 服务端 javascript 
        命令行工具
        桌面图形界面应用系统

commonjs 是 模块化的 标准
nodejs 是模块化的 应用


 nodejs中的 模块化？
         1.nodejs中的模块分为 两类， 
            一 是node提供的模块，称为核心模块，
            二 是用户编写的模块，称为文件模块
         2.我们将公共的功能抽离出一个单独的js文件存放，
           然后在需要的情况下，通过 exports 或者 module.exports 将模块导出，并通过 require引入这些模块
 */