var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Data = require('./components/Data');

ReactDOM.render(
  <Data />,
  document.getElementById('app')
);