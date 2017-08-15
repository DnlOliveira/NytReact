var React = require("react");
var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Header = require("./children/Header");
var Result = require("./children/Result");
var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      begin: "",
      end: "",
      results: [],
      saved: []
    };
  },

  saveArticles: function(article) {

    var promise = new Promise( (resolve, reject) => {
      resolve(helpers.postSaved(article));
    } ).then( (res) => {
      this.getSavedArticles();
    });

  },

  searchForArticles: function(topic, begin, end){
    helpers.runQuery(topic, begin, end)
      .then(function(results) {
        this.setState({results: results});
        console.log(this.state.results);
      }.bind(this));
  },

  getSavedArticles: function() {
    helpers.getSaved()
      .then(function(response) {
        console.log(response.data);
        var res = response.data;
        var saved = [];
        for (var i = 0; i < res.length; i++) {
          saved.push(res[i]);
        }

        this.setState({
          saved: saved
        });

        // console.log(saved);
      }.bind(this));
  },


  componentDidUpdate: function() {

  },


  render: function() {
    return(
      <div className="container" id="wrapper">

        <div className="row">
          <div className="col-md-12" id="head">
            <Header />
          </div>
        </div>


        <div className="row">
          <div className="col-md-12" id="search-window">
            <Search searchForArticles={this.searchForArticles} />
          </div>
        </div>


        <div className="row">
          <div className="col-md-12" id="result-window" >
            <Result saveArticles={this.saveArticles} results={this.state.results} />
          </div>
        </div>


        <div className="row">
          <div className="col-md-12" id="saved-window">
            <Saved getSavedArticles={this.getSavedArticles} saved={this.state.saved} />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Main;
