var http = require('http');

var Route = require('./server/route');

http.createServer( (req,res) => {  
   Route(req,res);
}).listen(9000)
