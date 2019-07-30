import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { formatMapData } from '../../utils/cleaner';
import { getMaps } from '../../utils/apiCalls';
import Main from '../../components/Main/Main';
import { NotFound } from '../../components/NotFound/NotFound';
import { startLoading, endLoading, storeMaps } from '../../actions';
import Header from '../../components/Header/Header';
import './App.scss';

export class App extends Component {
  componentDidMount = () => {
    const { startLoading, endLoading, storeMaps } = this.props;
    startLoading();
    getMaps()
      .then(data => formatMapData(data))
      .then(maps => storeMaps(maps))
      .then(() => endLoading());
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.maps ? (
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        ) : null}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  maps: state.maps
});

export const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  storeMaps: maps => dispatch(storeMaps(maps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
