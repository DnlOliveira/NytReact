// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var helper = {

  runQuery: function(topic, begin, end) {
    console.log(topic, begin, end);

    var apiKey = "5b386b2b1a0f41fa81106f5de0e7a266";

    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    var qs = '?api-key=' + apiKey + '&q=' + topic;

    if (begin) {
        qs += '&begin_date=' + begin + '0101';
    }

    if (end) {
        qs += '&end_date=' + end + '1231';
    }

    return axios.get(queryURL + qs)
    .then(function(response) {
      console.log(response);
      if (response.data.response.docs.length > 0) {
        var res = [];

        for (var i = 0; i < 5; i++) {
          var doc = response.data.response.docs[i];
          var id = doc._id;
          var article = {
            title: doc.headline.main,
            url: doc.web_url,
            date: doc.pub_date.split('T')[0],
            articleID: id
          }
          res.push(article);
        }//for loop
        return res;
      }//if statement
      else{
        return false;
      }
    });//then
    
  },//runQuery

  getSaved: function() {
    return axios.get("/api");
  },

  postSaved: function(data) {
    // console.log(data);
    axios.post("/api", data);
    return true;
  }

  

};//helper object

module.exports = helper;