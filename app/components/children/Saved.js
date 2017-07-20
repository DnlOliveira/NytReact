var React = require("react");
var helpers = require("../utils/helpers");

var Saved = React.createClass({

  getInitialState: function() {
    return {
      savedResults: this.props.saved
    };
  },

  // getSavedArticles: function() {
  //   helpers.getSaved()
  //     .then(function(response) {
  //       // console.log(response.data);
  //       var res = response.data;
  //       var saved = [];
  //       for (var i = 0; i < res.length; i++) {
  //         saved.push(res[i]);
  //       }

  //       this.setState({
  //         savedResults: saved
  //       });

  //       // console.log(saved);
  //     }.bind(this));
  // },

  //get saved articles when page loads
  componentDidMount: function() {
    this.props.getSavedArticles();
  },

  deleteArticle: function(article) {

    var promise = new Promise( (resolve, reject) => {
      resolve(helpers.deleteSaved(article));
    } ).then( (res) => {
      this.props.getSavedArticles();
    });

  },

  handleOnClick: function(event){
    var i = event.target.value;

    var article = {
      id: this.props.saved[i].articleID
    };

    // console.log(article);

    this.deleteArticle(article);
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Saved Articles</h2>
          {this.props.saved.map( (res, index) => {
            return (
              <div key={index} className="row">
                <div className="col-md-12">
                <h3><a href={res.url}>{res.title}</a></h3>
                <p>{res.snippet}</p>
                <h5>{res.date}</h5>
                <button onClick={this.handleOnClick} className="btn" value={index}>Delete</button>
                <hr/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Saved;
