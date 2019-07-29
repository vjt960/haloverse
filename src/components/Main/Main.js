import React from 'react';
import { connect } from 'react-redux';
import { Showcase } from '../../containers/Showcase/Showcase';
import { Placeholder } from '../Placeholder/Placeholder';
import Form from '../../containers/Form/Form';
import Profile from '../../containers/Profile/Profile';

export const Main = props => {
  return (
    <main>
      {props.maps.length && <Showcase maps={props.maps} />}
      <Form />
      {props.stats ? <Profile /> : <Placeholder />}
    </main>
  );
};

export const mapStateToProps = state => ({
  maps: state.maps,
  stats: state.stats
});

export default connect(mapStateToProps)(Main);
