import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { formatMapData } from '../../utils/cleaner';
import { getMaps } from '../../utils/apiCalls';
import { NotFound } from '../../components/NotFound/NotFound';
import { startLoading, endLoading, storeMaps } from '../../actions';
import Halo from '../Halo/Halo';
import HaloWars from '../../components/HaloWars/HaloWars';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';
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
            <Route exact path="/halo_5" component={Halo} />
            <Route exact path="/halo_wars_2" render={HaloWars} />
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

App.propTypes = {
  startLoading: PropTypes.func.isRequired,
  endLoading: PropTypes.func.isRequired,
  storeMaps: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
