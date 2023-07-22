
var express = require('express');
var jade = require('jade');
var http = require("http");


var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
    // Prepare the context
    res.render('home.jade', context);
});

app.post('/category', function(req, res) {
    // Process the data received in req.body
    res.redirect('/');
});



