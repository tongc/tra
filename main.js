var Parallel = require('paralleljs');
var http = require("http");
var junitp = require('./junitparser');

var result = junitp.run();

http.createServer(function(request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.end(String(result));
}).listen(8081);


// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');