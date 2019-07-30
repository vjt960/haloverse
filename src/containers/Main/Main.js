import React from 'react';
import { connect } from 'react-redux';
import { Showcase } from '../Showcase/Showcase';
import { Placeholder } from '../../components/Placeholder/Placeholder';
import { Loading } from '../../components/Loading/Loading';
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

export default connect(mapStateToProps)(Main);
