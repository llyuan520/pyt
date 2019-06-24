import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import TestComponent from './test/index.jsx';

class Pages extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={TestComponent}/>
      </Switch>
    );
  }
}

export default Pages;
