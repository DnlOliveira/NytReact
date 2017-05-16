var React = require("react");

var Result = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-md-12">
          <h1>{this.props.title}</h1>
          <h4>{this.props.date}</h4>
        </div>
      </div>
    );
  }
});

module.exports = Result;