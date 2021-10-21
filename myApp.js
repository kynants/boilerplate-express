var express = require('express');
var app = express();

// 1) Meet the node console
// console.log("Hello World");

// 2) Start a Working Express Server
// app.get('/', function (req, res) {
//  res.send('Hello Express');
// });

// 3) Server an HTML File
app.get("/", function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
