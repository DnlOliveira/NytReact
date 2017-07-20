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

          <div className="col-md-12" id="form">

            <form id="myform" onSubmit={this.handleSubmit}>
              <img src="https://cdn1.iconfinder.com/data/icons/freeline/32/find_in_magnifier_magnifying_research_search_view_zoom-128.png"
              width="35px"
              />

              <input placeholder="Topic" name="topic" type="text" value={this.state.topic} onChange={this.handleChange}></input>

              <button className="btn" type="submit">Search</button>
            </form>

          </div>

        </div>
    </div>
    );
  }

});

module.exports = Search;
