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
      savedResults: []
    };
  },

  //get saved articles when page loads
  componentDidMount: function() {
    helpers.getSaved()
      .then(function(response) {
        console.log(response);
      }.bind(this));
  },

  //if component changes run query for articles
  componentDidUpdate: function() {
    helpers.runQuery(this.state.topic, this.state.begin, this.state.end)
      .then(function(results) {
        this.setState({results: results});
        console.log(this.state.results);
      }.bind(this));
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

  refreshSavedArticles: function() {
    helpers.getSaved()
      .then(function(data) {
        console.log(data);
      });
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
          <div className="col-md-12">
            {this.state.results.map(function(article) {
              return (
                <Result id={article.articleID} title={article.title} date={article.date} url={article.url}/>
              );
            })}
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-md-12" id="saved-title">
            <h2>Saved Articles</h2>
          </div>
        </div>
          
        <div className="row">
          <div className="col-md-12">
            <Saved />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Main;