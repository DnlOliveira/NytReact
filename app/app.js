// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// var routes = require("./config/routes");
var Main = require("./components/Main");


// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain JavaScript
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(<Main />, document.getElementById("app"));
