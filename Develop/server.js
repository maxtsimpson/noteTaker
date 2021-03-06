// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var addApiRoutes = require("../Develop/routes/apiRoutes")
var addHtmlRoutes = require("../Develop/routes/htmlRoutes")
var path = require('path');

const noteRepo = require("../Develop/db/noteRepo");

const repo = new noteRepo();

const cleanup = () => {
    repo.dropConnections()
    process.exit()
}

app.use(express.static(path.join(__dirname,'public')));
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());



var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

addApiRoutes(app,repo);
addHtmlRoutes(app);

app.use('/api', router);
app.use('/', router);



// START THE SERVER
// =============================================================================
app.listen(port);

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);