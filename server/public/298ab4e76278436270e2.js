import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter as Router } from 'react-router-dom';
import reducers from './reducers';
import App from './components/App';
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
document.addEventListener('DOMContentLoaded', function () {
  render( /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById('app'));
});