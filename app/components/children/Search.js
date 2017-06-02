var React = require("react");


var Search = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      begin: "",
      end: ""
    };
  },

  //handles input changes by the keystroke
  handleChange: function(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  },
  
  // handles the submit button 
  handleSubmit: function(event) {
    event.preventDefault();

    this.props.searchForArticles(this.state.topic, this.state.begin, this.state.end);

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

          <div className="col-md-12">
            <form id="myform" onSubmit={this.handleSubmit}>
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
              <button className="btn" type="submit">Search</button>
            </form>
          </div>

        </div>
    </div>
    );
  }

});

module.exports = Search;