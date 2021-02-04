// Load express package and create our app
var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

// Set port based on enviroment
var port = PORT;

// Send our index.html file to the user for the home page
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// Create routes for admin section
// Get an instance of the router
var adminRouter = express.Router();

// Admin main page. the dashboard (http://localhost:PORT/admin)
adminRouter.get('/', function(req, res){
    res.send('I am the Dashboard');
});

// User page (http://localhost:PORT/admin/users)
adminRouter.get('/users', function(res, req){
    res.send('I show you all users');
});

// Post page (http://localhost:PORT/admin/posts)
adminRouter.get('/posts', function(res, req){
    res.send('I show you posts')
});

// Apply the routes to our application
app.use('/admin', adminRouter);

// Start Server
//app.listen(PORT);
//console.log('Express Server running at http://127.0.0.1:'.PORT);