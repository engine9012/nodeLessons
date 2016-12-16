"use strict";
// 引入‘express’模块，并将它赋予‘express’这个变量等待使用。
var express = require('express');
//调用express实例，他是一个函数，不带参数调用时，会返回一个express实例，将这个变量赋予app变量.
var app = express();
// app有许多方法,其中,包括最常用的get/post/put/patch/delete,在这里我们调用其中的get方法,为我们的"/"路径指定一个handler函数.
//这个handler函数会接受req和res两个对象,他们分别是请求的request和response.
//request中包含了浏览器传来的各种信息,比如query啊,body啊,headers啊之类的,都可以通过req对象访问到.
//response对象,我们一般不从里面取信息,而是通过他来定制我们想浏览器输出的学习,比如header信息,比如想要向浏览器输出内容.这里我们调用了他的#send方法,向浏览器输出一个字符串.
app.get('/', function(req, res){
   res.send('hello world!');
})   ;

//定义好我们的app的行为后,让他监听本地的3000端口,这里的第二个函数是个回调函数,会在listen动作成功后执行,我们这里执行了一个命令输出操作,告诉我们监听动作已完成.
app.listen(3000, function () {
   console.log('app is listening at port 3000');
});








