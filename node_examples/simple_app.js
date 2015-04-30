
// simple node js application
var http = require('http'); // add the http module
var myServer = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<b>Hello World</b>");
    response.end();
}); // create a server

myServer.listen(4000);
console.log("Go to http://localhost:4000 to access");
