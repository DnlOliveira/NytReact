var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  articleID: {
    type: String
  },
  title: {
    type: String
  },
  date: {
    type: String
  },
  URL: {
    type: String
  }

});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;