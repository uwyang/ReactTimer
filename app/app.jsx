var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

require('style!css!sass!applicationStyles');

var {Route, Router, IndexRoute, hashHistory}=require('react-router');


ReactDOM.render(
  <Router history={hashHistory}>
    {/*
      Main component is shown on every page.
      Weather is index Route, e.g., the default choice.
    */}
    <Route path ="/" component={Main}>
      <IndexRoute  component={Timer}></IndexRoute>
      <Route path="countdown" component= {Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
