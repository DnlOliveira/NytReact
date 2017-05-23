var React = require("react");
var helpers = require("../utils/helpers");

var Saved = React.createClass({

  getInitialState: function() {
    return {
      savedResults: []
    };
  },

  //get saved articles when page loads
  componentDidMount: function() {
    helpers.getSaved()
      .then(function(response) {
        // console.log(response.data);
        var res = response.data;
        var saved = [];
        for (var i = 0; i < res.length; i++) {
          saved.push(res[i]);
        }

        this.setState({
          savedResults: saved
        });

        console.log(saved);
      }.bind(this));
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.state.savedResults.map( function(res) {
            return (
              <div className="row">
                <div className="col-md-12">
                  <h3><a href={res.URL}>{res.title}</a></h3>
                  <h4>{res.date}</h4>
                  <button className="btn">Delete</button>
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