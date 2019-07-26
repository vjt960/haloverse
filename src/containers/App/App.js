import React, { Component } from 'react';
import { getMaps } from '../../utils/apiCalls';
import Header from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { NotFound } from '../../components/NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

export class App extends Component {
  componentDidMount = () => {
    console.log('component mounted...');
    getMaps().then(data => console.log(data));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
