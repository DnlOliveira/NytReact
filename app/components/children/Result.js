var React = require("react");
var helpers = require("../utils/helpers");

var Result = React.createClass({

  getInitialState: function() {
    return {
      results: this.props.results
    };
  },

  handleOnClick: function(event) {

    console.log(event.target.value);
    var i = event.target.value;

    var article = {
      id: this.props.results[i].articleID,
      title: this.props.results[i].title,
      url: this.props.results[i].url,
      date: this.props.results[i].date,
      snippet: this.props.results[i].snippet
    };

    console.log(article);

    this.props.saveArticles(article);


  },

  render: function() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            {this.props.results.map( (res, index) => {

              return (
                <div key={index} className="row">
                  <div className="col-md-12">

                    <h3><a href={res.url}>{res.title}</a></h3>
                    <p>{res.snippet}</p>
                    <h5>{res.date}</h5>
                    <button onClick={this.handleOnClick} className="btn" value={index}>Save</button>
                    <hr/>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Result;
