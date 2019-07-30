import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '../../components/Loading/Loading';
import { Placeholder } from '../../components/Placeholder/Placeholder';
import { Showcase } from '../Showcase/Showcase';
import Form from '../Form/Form';
import Profile from '../Profile/Profile';

export const Main = props => {
  return (
    <main>
      {props.maps.length ? (
        <Showcase maps={props.maps} />
      ) : (
        <Loading target="showcase" />
      )}
      <Form />
      {!props.stats && <Placeholder />}
      {props.stats && <Profile />}
    </main>
  );
};

export const mapStateToProps = state => ({
  maps: state.maps,
  stats: state.stats,
  userIsLoading: state.userIsLoading
});

Main.propTypes = {
  maps: PropTypes.array.isRequired,
  stats: PropTypes.object.isRequired,
  userIsLoading: PropTypes.bool
};

export default connect(mapStateToProps)(Main);
