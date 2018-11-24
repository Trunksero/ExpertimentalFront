

var express = require('express');
app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + "/learning_js2.html");
});
app.get('/about', function(req,res){
  res.sendFile(__dirname + "/About.html");
});

app.listen(3000);
