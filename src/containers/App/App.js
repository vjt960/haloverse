import React, { Component } from 'react';
import './App.scss';
import { getMaps } from '../../utils/apiCalls';
import Header from '../../components/Header/Header';

export class App extends Component {
  componentDidMount = () => {
    console.log('component mounted...');
    getMaps().then(data => console.log(data));
  };

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
