// Load the http module to create an http server.
var http = require('http');
var books = [{name: "aaa", author: "xxx"}, {name: "bbb", author: "yyy"}];
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  //response.writeHead(200, {"Content-Type": "text/plain"});
  if ( request.method === 'OPTIONS' ) {
    
  }
  
  if (request.method === 'GET' && request.url === '/library') {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({ books: books }));
  }
  
});



// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000, function(){
  // Put a friendly message on the terminal
  console.log("Server running at http://127.0.0.1:8000/");  
});
