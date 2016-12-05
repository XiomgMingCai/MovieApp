/**
 * Created by xiongmingcai on 16/12/5.
 */

var express = require('express');
var port = process.env.PORT || 3000; //express框架引入
var app = express();                       //实例
app.set('views', './views');               //模板位置
app.set('view engine', 'jade');          //模板引擎
app.listen(port);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Movie 首页'
    })
});

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'Movie 详情页'
    })
});

app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'Movie 后台录入页'
    })
});

app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'Movie 列表页'
    })
});
console.log('Server running at http://127.0.0.1:' + port);