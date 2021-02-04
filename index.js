var http = require("http");
fs = require('fs');
const  PORT = process.env.PORT || 3000;

http.createServer(function (request, response){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain

    // Write to our server. set configuration for the response
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Access-Control-Allow-Origin' : '*'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');
    // Send the response body as "Hello World"
    readStream.pipe(response);
}).listen(PORT, () => {
    console.log('our app is running on port ${ PORT }');
});