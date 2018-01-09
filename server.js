// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

/************
 * DATABASE *
 ************/

var db = require('./models');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/albums', function album_index(req, res){
  db.Album.find({}, function(err, docs) {
    err ? console.log('album_index error') : res.json(docs);
  });
});

app.post("/api/albums", function album_create(req, res) {
	console.log(req.body);
	req.body.genres = req.body.genres.split(', ');
	db.Album.create(req.body, function(err, doc) {
		err ? console.log('album_create error') : res.json(doc);
	});
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
