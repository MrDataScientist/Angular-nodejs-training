/**
 * Tarik EN NAKDI
 */

var http = require("http");
var server = http.createServer(function(request, response){
	
	response.writeHead(200, {"Content-Type":"text/html"});
	
	//require('colors');
	response.end('Hello Tarik');
	console.log('Success');
	
}).listen(8888);
