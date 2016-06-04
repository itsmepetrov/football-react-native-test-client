import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Router from './Router';
import createStore from '../store/createStore';
import 'isomorphic-fetch';

export default class Root extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Router />
      </Provider>
    );
  }
}
