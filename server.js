// Load the http module to create an http server.
var http = require('http');
var books = [{name: "aaa", author: "xxx"}, {name: "bbb", author: "yyy"}];
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  
  console.log(request.method + " " + request.url);  
	
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  
  if ( request.method === 'OPTIONS' ) {
    response.writeHead(200);
    response.end();
    return;
  } 
  
  if (request.method === 'GET' && request.url === '/library') {
    
    response.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
    response.end(JSON.stringify({ books: books }));
  }
  
  if (request.method === 'POST' && request.url === '/library') {
        var body = '';
        request.on('data', function (data) { body += data; console.log("Partial Body: " + body); });
        request.on('end', function () { 
		
		response.writeHead(200); 
		console.log("Body: " + body); 
		var book = JSON.parse(body);
		console.log(book);
		books.push(book);
		
	});
        //res.writeHead(200, {'Content-Type': 'text/html'});
        //res.end('post received');

  }
  
});



// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000, function(){
  // Put a friendly message on the terminal
  console.log("Server running at http://127.0.0.1:8000/");  
});
