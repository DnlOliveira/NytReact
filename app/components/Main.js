var React = require("react");
var Search = require("./children/Search");
var Result = require("./children/Result");
var helpers = require("./utils/helpers")

var Main = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      begin: "",
      end: "",
      results: []
    };
  },

  //get saved articles when page loads
  // componentDidMount: function() {
  //   helpers.getSaved()
  //     .then(function(response) {
  //       console.log(response);
  //     });
  // },

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

  render: function() {
    return(
      <div className="container">

        <header>
          <div className="row">
            <div className="col-md-12">
              <h1>New York Times Article Scrubber</h1>
              <h4>Search for and annotate articles of interest!</h4>
            </div>
          </div>
        </header>
      
        <div className="row">
          <div className="col-md-12">
            <Search setTerm={this.setTerm} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2>Results</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {this.state.results.map(function(article) {
              return (
                <Result title={article.title} date={article.date} />
              );
            })}
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Main;