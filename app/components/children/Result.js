var React = require("react");
var helpers = require("../utils/helpers");

var Result = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      begin: "",
      end: ""
    };
  },
  
  handleOnClick: function(event) {

    var article = {
      id: this.props.id,
      title: this.props.title,
      url: this.props.url,
      date: this.props.date
    };

    helpers.postSaved(article);

    // $.ajax({
    //   article
    // }).done(function(data) {
    //   helpers.postSaved(article);
    // }).done(function(value){
    //   this.props.refreshSavedArticles();
    // });

    // var article = {
    //   id: this.props.id,
    //   title: this.props.title,
    //   url: this.props.url,
    //   date: this.props.date
    // };

    // helpers.postSaved(article);
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
                    <h4>{res.date}</h4>
                    <button onClick={this.handleOnClick} className="btn" value={res.id}>Save</button>
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