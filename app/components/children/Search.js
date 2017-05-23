var React = require("react");


var Search = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      begin: "",
      end: ""
    };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  },
  
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setTerm(this.state.topic, this.state.begin, this.state.end);
    console.log(this.state.topic, this.state.begin, this.state.end);

      this.setState(
        {
            topic: '',
            begin: '',
            end: ''
        }
      );  
  },

  render: function() {
    return(
      <div className="container" id="search-box">
        
        <div className="row">
          <div className="col-md-12" id="search-title">
            <h2>Search</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <label>
                <h3>Topic</h3>
                <input name="topic" type="text" value={this.state.topic} onChange={this.handleChange}></input>
              </label><br/>
              <label>
                <h3>Start Year</h3>
                <input name="begin" type="text" value={this.state.begin} onChange={this.handleChange}></input>
              </label><br/>
              <label>
                <h3>End Year</h3>
                <input name="end" type="text" value={this.state.end} onChange={this.handleChange}></input>
              </label><br/>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Search;