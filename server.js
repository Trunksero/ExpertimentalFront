

var express = require('express');
app = express();

app.use(express.static('public'));
// ALL MY PAGES ---- Yep.
app.get('/', function(req, res){
  res.sendFile(__dirname + "/learning_js2.html");
});
app.get('/about', function(req,res){
  res.sendFile(__dirname + "/About.html");
  });
app.get('/4thPage',function(req,res){
  res.sendFile(__dirname + "/index4.html");
});
app.get('/5thPage',function(req,res){
  res.sendFile(__dirname + "/Learning5.html");
});
app.get('/6thPage',function(req,res){
  res.sendFile(__dirname + "/Learning6.html");
});
app.get('/7thPage',function(req,res){
  res.sendFile(__dirname + "/Learning7.html");
});
app.get('/8thPage',function(req,res){
  res.sendFile(__dirname + "/Last(Grid).html");
});
//Ending line of all My Pages ---- Yep.
app.listen(3000);
