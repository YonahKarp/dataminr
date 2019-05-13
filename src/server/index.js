var express=require('express');
var mockData = require('./mockData');


var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.get('/feed',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mockData.createFeed()));
});

app.get('/alerts',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mockData.createAlerts()));
});


var server=app.listen(3001,function() {});