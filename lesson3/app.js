"use strict";

/*
* √√√ 目标: 当在浏览器中访问 http://localhost:3000/ 时，输出 CNode(https://cnodejs.org/ ) 社区首页的所有帖子标题和链接，以 json 的形式。
* 输出示例：
*[
     {
         "title": "【公告】发招聘帖的同学留意一下这里",
         "href": "http://cnodejs.org/topic/541ed2d05e28155f24676a12"
     },
     {
         "title": "发布一款 Sublime Text 下的 JavaScript 语法高亮插件",
         "href": "http://cnodejs.org/topic/54207e2efffeb6de3d61f68f"
     }
 ]
* √√√ 学习使用 superagent 抓取网页
* √ 学习使用 cheerio 分析网页
* */

var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    var url = 'https://cnodejs.org/';
    superagent.get(url).end(function (err, sres) {
    //   常规错误处理
        if(err){
            return next(err);
        }
    //    加载sres.text 中的HTML内容,将它传给 cheerio.load 之后,就可以得到一个实现了 jQuery 接口的变量,我们习惯性的将之命名为'$'
    //    剩下的都是jQuery内容了.
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list .topic_title').each(function (idx, element) {
            var item = {
                title: '',
                href: '',
                author: ''
            };
            var $element = $(element);
            item.title = $element.attr('title');
            item.href = $element.attr('href');
            //TODO
            //item.author = $element.attr('href');
            items.push(item);
        });
        console.log(items);
        res.send(items);
    });

});

app.listen('3000', function () {
    console.log('app is listening port 3000');
});














