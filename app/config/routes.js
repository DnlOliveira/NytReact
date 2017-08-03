// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Header = require("../components/children/Header");
var Search = require("../components/children/Search");
var Result = require("../components/children/Result");
var Saved = require("../components/children/Saved");

module.exports = (

  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route path="search" component={Search} />
      <Route path="saved" component={Saved} />

      {/* Show search by default */}
      <IndexRoute component={Search} />

    </Route>
  </Router>

);
