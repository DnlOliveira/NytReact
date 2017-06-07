var React = require("react");

var Header = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-md-12" id="header">
          <h1>New York Times Article Scrubber</h1>
          <h4>Search for and save them for later!</h4>
        </div>
      </div>
    );
  }
  
});

module.exports = Header;