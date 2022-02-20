// 文件名：express-baseUse.js
//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/',(request,response)=>{
    //设置简单响应
    response.send('Hello Express!');
});

//4. 监听端口相应服务
app.listen(8700,()=>{
    console.log("服务端已经运行,端口监听中...");
});