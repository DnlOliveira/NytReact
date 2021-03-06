// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require('path');

mongoose.Promise = Promise;

// Require History Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Sets an initial port.
var PORT = 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});

// app.use(express.static("./public"));

// -------------------------------------------------
// MongoDB Configuration configuration
// if (process.env.PORT) {
//     connectionString = 'mongodb://heroku_kq38k19q:s9r2nllng9kusrpikoqt57vlmb@ds115352.mlab.com:15352/heroku_kq38k19q';
// } else {
//     connectionString = 'mongodb://localhost/nytreact';
// }
//
// mongoose.connect(connectionString).then(function() {
//   app.listen(PORT, function() {
//       console.log('listening on port ' + PORT);
//     });
// });
//
// var db = mongoose.connection;
//
// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });
//
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "./public/index.html");
});



app.get("/api", function(req, res) {

  Article.find({}).exec(function(err, doc) {

    var articles = [];

    doc.forEach( function(article) {
      console.log(article);
      articles.push({
        title: article.title,
        url: article.URL,
        date: article.date,
        articleID: article.articleID,
        snippet: article.snippet
      });
    });
    console.log(articles[0]);
    res.send(articles);
  });

});



// // This is the route we will send POST requests to save articles
app.post("/api", function(req, res) {
  console.log(req.body);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Article.create({
    articleID: req.body.id,
    title: req.body.title,
    date: req.body.date,
    URL: req.body.url,
    snippet: req.body.snippet
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Article");
    }
  });

});


//This route will delete articles saved from the database
app.post("/api/delete", function(req, res) {
  console.log(req.body);

  Article.remove( {articleID: req.body.id}, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Article");
    }
  });

});
