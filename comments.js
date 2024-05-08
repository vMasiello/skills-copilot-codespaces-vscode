// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'data/comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

// Set up static files
app.use(express.static('public'));

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

app.post('/api/comments', function(req, res) {
  var newComment = {
    id: Date.now()
  }
});