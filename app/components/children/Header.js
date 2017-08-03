var React = require("react");

var Header = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-md-12" id="header">
          <img src="https://a1.nyt.com/assets/homepage/20170719-170821/images/foundation/logos/nyt-logo-379x64.png" width='55%' />
          <h4>New York Times Article Scrubber</h4>
        </div>
      </div>
    );
  }

});

module.exports = Header;
