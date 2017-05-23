var React = require("react");
var helpers = require("../utils/helpers");

var Result = React.createClass({
  handleOnClick: function(event) {

    var article = {
      id: this.props.id,
      title: this.props.title,
      url: this.props.url,
      date: this.props.date
    };

    helpers.postSaved(article)
      .then( function(res) {
        this.props.refreshSavedArticles();
      }.bind(this));

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
            <h3><a href={this.props.url}>{this.props.title}</a></h3>
            <h4>{this.props.date}</h4>
            <button className="btn" value={this.props.id} onClick={this.handleOnClick}>Save</button>
            <hr/>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Result;