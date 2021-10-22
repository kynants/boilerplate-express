var express = require('express');
var app = express();

// 1) Meet the node console
// console.log("Hello World");

// 2) Start a Working Express Server
// app.get('/', function (req, res) {
//  res.send('Hello Express');
// });

// 3) Server an HTML File
// app.get("/", function(req, res) {
//  res.sendFile(__dirname + "/views/index.html");
// });

// 4) Serve Static Assets
// Normal usage
// app.use(express.static(__dirname + "/public"));
// // Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));

// 5) Serve JSON on a Specific Route
app.get("/json", (req, res) => {
 res.json({
  "message": "Hello json"
 });
});

module.exports = app;
