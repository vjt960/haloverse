import React, { Component } from 'react';
import './App.scss';
import { getMaps } from '../../utils/apiCalls';

export class App extends Component {
  componentDidMount = () => {
    console.log('component mounted...');
    getMaps().then(data => console.log(data));
  };

  render() {
    return (
      <div className="App">
        <h1>Placeholder Text</h1>
      </div>
    );
  }
}
