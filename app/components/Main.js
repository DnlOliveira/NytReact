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
      results: []
    };
  },

  refreshSavedArticles: function() {
    this.refs.child.updateSavedArticles();
  },

  searchForArticles: function(){
    helpers.runQuery(this.state.topic, this.state.begin, this.state.end)
      .then(function(results) {
        this.setState({results: results});
        console.log(this.state.results);
      }.bind(this));
  },

  //if component changes run query for articles
  componentDidUpdate: function() {
    this.searchForArticles();
  },

  //for child to update parent's terms
  setTerm: function(topic, begin, end) {

    this.setState(
      {
        topic: topic,
        begin: begin,
        end: end
      }
    );
  },


  render: function() {
    return(
      <div className="container">

        <div className="row">
          <div className="col-md-12" id="header">
            <Header />
          </div>
        </div>

        <br/>

        <div className="row" id="search-title">
          <div className="col-md-12">
            <h2>Search</h2>
          </div>
        </div>
      
        <div className="row">
          <div className="col-md-12" id="search-window">
            <Search setTerm={this.setTerm} />
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-md-12" id="result-title">
            <h2>Search Results</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" id="result-window">
            <Result results={this.state.results} />
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-md-12" id="saved-title">
            <h2>Saved Articles</h2>
          </div>
        </div>
          
        <div className="row">
          <div className="col-md-12" id="saved-window">
            <Saved ref="child" />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Main;