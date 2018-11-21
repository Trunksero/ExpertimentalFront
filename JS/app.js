var http = require('http');
var fs = require('fs');
var ex = require('express');

fs.readFile('./../Learning_JS2.html', function(err,html) {
  if(err){
    throw err;}

  else{


var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(html);
  res.end();
});
  server.listen(3000,'127.0.0.1');
  console.log('yo nigs the lawn each morning');

}});
