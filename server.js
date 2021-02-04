// Load express package and create our app
var express = require('express');
var app = express();
const PORT = precess.env.PORT || 8080;

// Set port based on enviroment
var port = PORT;

// Send our index.html file to the user for the home page
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// Start Server
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);