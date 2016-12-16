/*
* 需求: 输入 http://localhost:3000/?q=renjing 请求地址, 在response中返回参数的md5加密后的值.
* */
"use strict";
// 引入依赖
var express = require('express');
var utility = require('utility');

//创建express实例
var app = express();

app.get('/', function (req, res) {
   //从req.query 中取出我们的 q 参数
    // 如果是post传来的 body数据,则是 req.body里面, 不过 express 默认不处理 body中的信息,需要引入https://github.com/expressjs/body-parser这个中间件才会处理,这个后面会讲到.
    // 如果分不清什么是query, 什么是body的话,那就需要补一下http的知识了.
    var q = req.query.q;

    // 调用utility.md5方法, 得到 md5 之后的值
    // 之所以使用utility 这个库来生成 md5 值,其实知识习惯性问题,每个人都有自己习惯的技术堆栈, utility中定义了很多常用且复杂的辅助方法
    var md5Value = utility.md5(q);

    res.send(md5Value);
});

app.listen('3000', function () {
    console.log('app is running at port 3000');
});