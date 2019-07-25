import React, { Component } from 'react';
import './App.scss';

export class App extends Component {
  componentDidMount = () => {
    console.log('component mounted...');
  };

  render() {
    return <h1>Placeholder Text</h1>;
  }
}
